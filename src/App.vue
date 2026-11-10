<template>
  <div class="min-h-screen flex flex-col bg-cyber-darkest text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
    
    <!-- Optional CRT Scanline Overlay -->
    <div 
      v-if="scanlinesEnabled" 
      class="fixed inset-0 cyber-scanlines z-50 pointer-events-none opacity-40"
    ></div>

    <!-- Top Navigation / Telemetry Header -->
    <AppHeader 
      :scanlines-enabled="scanlinesEnabled" 
      @toggle-scanlines="scanlinesEnabled = !scanlinesEnabled" 
    />

    <!-- Main Content Canvas -->
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      
      <!-- System Intro Subtitle / Status Banner -->
      <section class="border-b border-cyber-border pb-4 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <div class="flex items-center gap-2">
          <span class="text-cyan-400 font-bold">&gt;&gt;</span>
          <span>TERMINAL DE DESCONSTRUÇÃO SOCIOLINGUÍSTICA E TRADUÇÃO CONTEXTUAL DE JARGÕES URBANOS</span>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-slate-500">MODO: INFERÊNCIA AUTÔNOMA</span>
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span class="text-slate-300">ZERO LATÊNCIA EXTERNA</span>
        </div>
      </section>

      <!-- Main Interactive Grid: Terminal Input + History Sidebar -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- Center/Left Column: Input Terminal & Results (8 cols) -->
        <div class="lg:col-span-8 space-y-6">
          
          <!-- 1. Terminal Input Component -->
          <TerminalInput
            ref="terminalInputRef"
            :is-loading="isLoading"
            :targets="supportedTargets"
            @submit-query="handleDecode"
          />

          <!-- Error Alert Banner -->
          <div 
            v-if="errorMessage" 
            class="p-4 rounded-xl bg-red-950/80 border border-red-700/80 text-red-200 font-mono text-xs flex items-center justify-between shadow-lg"
          >
            <div class="flex items-center gap-2">
              <span class="font-bold text-red-400">[ERRO_SISTEMA]:</span>
              <span>{{ errorMessage }}</span>
            </div>
            <button 
              @click="errorMessage = ''" 
              class="text-red-400 hover:text-white px-2 py-0.5 rounded border border-red-800"
            >
              FECHAR
            </button>
          </div>

          <!-- 2. Terminal Loading Animation while processing -->
          <TerminalLoading v-if="isLoading" />

          <!-- 3. Result Context Card when loaded -->
          <ResultCard 
            v-else-if="currentResult" 
            :result="currentResult" 
          />

          <!-- Blank State Prompt if no query yet -->
          <div 
            v-else 
            class="w-full bg-cyber-card/60 rounded-xl border border-dashed border-slate-800 p-8 sm:p-12 text-center font-mono text-slate-500 space-y-3"
          >
            <div class="text-cyan-400 text-sm tracking-widest uppercase">
              // AGUARDANDO COMANDO DE ENTRADA //
            </div>
            <p class="text-xs text-slate-400 max-w-md mx-auto">
              Digite qualquer gíria, expressão periférica, bordão de anime ou jargão técnico no console acima para sintetizar a tradução contextual e o mapa de formalidade.
            </p>
          </div>

        </div>

        <!-- Right Column: Recent History (4 cols) -->
        <div class="lg:col-span-4 space-y-6">
          <HistorySidebar
            :history="history"
            :active-query="currentResult?.query || ''"
            @select-item="handleSelectFromHistory"
            @clear-history="handleClearHistory"
          />

          <!-- Quick Tips Panel -->
          <div class="bg-cyber-dark/80 rounded-xl border border-slate-800/80 p-4 font-mono text-xs space-y-2 text-slate-400">
            <div class="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider">
              <span>// GUIA DE USO DO MOTOR</span>
            </div>
            <ul class="space-y-1.5 text-[11px] list-disc list-inside text-slate-400">
              <li><strong class="text-slate-300">Escala Diafásica:</strong> de 0.0 (marginal/underground) até 10.0 (corporativo/culto).</li>
              <li><strong class="text-slate-300">Pop Lore:</strong> Traduz o termo sob o prisma narrativo de Light Novels e anime.</li>
              <li><strong class="text-slate-300">Parser Dinâmico:</strong> Qualquer frase digitada será decomposta e estruturada mesmo fora da base fixa.</li>
            </ul>
          </div>
        </div>

      </div>

    </main>

    <!-- Cyberpunk Terminal Footer -->
    <SystemFooter />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from './components/AppHeader.vue'
import TerminalInput from './components/TerminalInput.vue'
import TerminalLoading from './components/TerminalLoading.vue'
import ResultCard from './components/ResultCard.vue'
import HistorySidebar from './components/HistorySidebar.vue'
import SystemFooter from './components/SystemFooter.vue'
import { decodeSlang, SUPPORTED_TARGETS } from './services/aiService.js'

const supportedTargets = SUPPORTED_TARGETS
const isLoading = ref(false)
const currentResult = ref(null)
const history = ref([])
const errorMessage = ref('')
const scanlinesEnabled = ref(false)
const terminalInputRef = ref(null)

// Execute slang decoding
async function handleDecode({ query, targetLang }) {
  if (!query) return
  
  errorMessage.value = ''
  isLoading.value = true

  try {
    const result = await decodeSlang(query, targetLang)
    currentResult.value = result

    // Update session history (avoid duplicate consecutive items, keep last 5)
    history.value = [
      result,
      ...history.value.filter(item => item.query.toLowerCase() !== result.query.toLowerCase())
    ].slice(0, 5)

    // Save to localStorage for convenience
    try {
      localStorage.setItem('slang_decoder_history', JSON.stringify(history.value))
    } catch {
      // LocalStorage fallback
    }
  } catch (err) {
    errorMessage.value = err.message || 'Falha ao processar a análise léxica.'
  } finally {
    isLoading.value = false
  }
}

// Select item from history
function handleSelectFromHistory(item) {
  currentResult.value = item
  if (terminalInputRef.value) {
    terminalInputRef.value.setInput(item.query, item.targetLanguage?.id)
  }
}

// Clear history
function handleClearHistory() {
  history.value = []
  try {
    localStorage.removeItem('slang_decoder_history')
  } catch {
    // Ignore
  }
}

// Initial hydration: load saved history and run default query for immediate showcase
onMounted(async () => {
  try {
    const saved = localStorage.getItem('slang_decoder_history')
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) {
        history.value = parsed.slice(0, 5)
      }
    }
  } catch {
    // Ignore parse errors
  }

  // Pre-load a default demo slang so the user sees the interface in full glory
  if (!currentResult.value) {
    handleDecode({ query: 'O pai tá on', targetLang: 'en' })
  }
})
</script>

