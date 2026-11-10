<template>
  <div class="w-full bg-cyber-card/95 rounded-xl border border-cyan-500/40 shadow-cyber-card p-5 sm:p-7 backdrop-blur-md relative overflow-hidden cyber-box">
    
    <!-- Header with Query, Category and Actions -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-cyber-border">
      <div>
        <div class="flex items-center flex-wrap gap-2 mb-1.5">
          <span class="px-2 py-0.5 rounded text-[11px] font-mono font-semibold uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-700/60">
            {{ result.category }}
          </span>
          <span class="px-2 py-0.5 rounded text-[11px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800/60">
            PRECISÃO: {{ result.confidenceScore }}
          </span>
          <span class="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800">
            DESTINO: {{ result.targetLanguage?.code || 'EN-US' }}
          </span>
        </div>

        <h2 class="text-xl sm:text-2xl font-bold font-mono text-white tracking-wide flex items-center gap-2">
          <span class="text-cyan-400">&ldquo;</span>{{ result.query }}<span class="text-cyan-400">&rdquo;</span>
        </h2>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 self-start sm:self-auto">
        <button
          @click="copyAnalysis"
          type="button"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all"
          :class="isCopied 
            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-neon-green' 
            : 'bg-cyber-dark border-slate-700 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50'"
        >
          <component :is="isCopied ? Check : Copy" class="w-3.5 h-3.5" />
          <span>{{ isCopied ? 'COPIADO!' : 'COPIAR ANÁLISE' }}</span>
        </button>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="mt-6 space-y-6">
      
      <!-- 1. Tradução Contextual Direta -->
      <div class="bg-cyber-darkest rounded-lg border border-slate-800 p-4 sm:p-5 relative">
        <div class="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <BookOpen class="w-4 h-4 text-cyan-400" />
          <span class="font-bold tracking-wider uppercase">Tradução Contextual Direta</span>
          <span class="text-slate-600">// O SIGNIFICADO REAL</span>
        </div>

        <p class="text-base sm:text-lg text-slate-100 font-sans leading-relaxed">
          {{ result.meaning }}
        </p>

        <!-- Functional Equivalent / Translation target -->
        <div v-if="result.equivalent" class="mt-3 pt-3 border-t border-slate-800/80 flex items-start gap-2 text-xs font-mono">
          <span class="text-emerald-400 font-semibold shrink-0">EQUIVALENTE DIRETO:</span>
          <span class="text-emerald-200 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/60">
            {{ result.equivalent }}
          </span>
        </div>
      </div>

      <!-- 2. Gráfico / Barra de Nível de Formalidade -->
      <div class="bg-cyber-dark rounded-lg border border-slate-800/90 p-4 sm:p-5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-2 text-xs font-mono text-slate-300">
            <Gauge class="w-4 h-4 text-amber-400" />
            <span class="font-bold tracking-wider uppercase">Nível de Formalidade</span>
            <span class="text-slate-500">// ESCALA DIAFÁSICA (0 A 10)</span>
          </div>

          <!-- Numeric Readout Badge -->
          <div class="flex items-center gap-2">
            <span 
              class="px-2.5 py-1 rounded text-xs font-mono font-bold border"
              :class="formalityBadgeStyle"
            >
              ÍNDICE: {{ result.formalityIndex.toFixed(1) }} / 10.0 — {{ result.formalityLevel }}
            </span>
          </div>
        </div>

        <!-- Animated Progress Meter Bar -->
        <div class="space-y-1.5">
          <div class="w-full h-3 bg-cyber-darkest rounded-full overflow-hidden border border-slate-800 p-0.5">
            <div 
              class="h-full rounded-full transition-all duration-700 ease-out shadow-sm"
              :class="formalityProgressColor"
              :style="{ width: `${formalityPercentage}%` }"
            ></div>
          </div>

          <!-- Scale Markers -->
          <div class="flex justify-between text-[10px] font-mono text-slate-500 pt-0.5">
            <span>[0.0: Gíria de Rua]</span>
            <span class="hidden sm:inline">[2.5: Informal / Redes]</span>
            <span>[5.0: Coloquial Neutro]</span>
            <span class="hidden sm:inline">[7.5: Padrão / Mídia]</span>
            <span>[10.0: Culto / Corporativo]</span>
          </div>
        </div>
      </div>

      <!-- 3. Cenário Ideal de Uso & Raízes Culturais -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <!-- Cenário Ideal -->
        <div class="bg-cyber-dark/80 rounded-lg border border-slate-800/80 p-4">
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Compass class="w-4 h-4 text-emerald-400" />
            <span class="font-bold tracking-wider uppercase">Cenário Ideal de Uso</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {{ result.bestScenario }}
          </p>
        </div>

        <!-- Raiz Cultural & Sintaxe -->
        <div class="bg-cyber-dark/80 rounded-lg border border-slate-800/80 p-4">
          <div class="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
            <ShieldCheck class="w-4 h-4 text-purple-400" />
            <span class="font-bold tracking-wider uppercase">Origem &amp; Papel Sintático</span>
          </div>
          <p class="text-xs text-slate-400 font-sans leading-relaxed mb-2">
            {{ result.origin }}
          </p>
          <div class="text-[11px] font-mono text-purple-300">
            <span class="text-slate-500">Função:</span> {{ result.syntacticRole }}
          </div>
        </div>

      </div>

      <!-- 4. Exemplo Prático de Diálogo (Mini Chat Terminal) -->
      <div class="bg-cyber-darkest rounded-lg border border-slate-800 p-4 sm:p-5">
        <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
          <div class="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <MessageSquare class="w-4 h-4 text-cyan-400" />
            <span class="font-bold tracking-wider uppercase">Exemplo Prático de Diálogo</span>
            <span class="text-slate-600">// APLICAÇÃO EM CONTEXTO REAL</span>
          </div>

          <span class="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            SIMULAÇÃO INTERLOCUTORES
          </span>
        </div>

        <!-- Chat Transcript -->
        <div class="space-y-3 font-mono text-xs sm:text-sm py-1">
          
          <!-- Interlocutor A -->
          <div class="flex items-start gap-3">
            <div class="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold shrink-0">
              {{ result.dialogue.speakerA }}
            </div>
            <div class="bg-slate-900/90 border border-slate-800 text-slate-300 px-3.5 py-2 rounded-lg max-w-xl">
              {{ result.dialogue.messageA }}
            </div>
          </div>

          <!-- Interlocutor B (Applying the slang) -->
          <div class="flex items-start gap-3">
            <div class="px-2 py-1 rounded bg-cyan-950/80 border border-cyan-600/70 text-cyan-300 text-xs font-bold shrink-0">
              {{ result.dialogue.speakerB }}
            </div>
            <div class="bg-cyan-950/40 border border-cyan-800/60 text-slate-100 px-3.5 py-2 rounded-lg max-w-xl shadow-sm">
              {{ result.dialogue.messageB }}
            </div>
          </div>

        </div>

        <!-- Dialogue Context Note -->
        <div class="mt-3 pt-2.5 border-t border-slate-900 text-xs font-mono text-slate-400 flex items-center gap-1.5">
          <span class="text-cyan-400 font-bold">&gt;&gt;</span>
          <span class="text-slate-500">Nota Pragmática:</span>
          <span>{{ result.dialogue.contextNote }}</span>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  BookOpen,
  Gauge,
  Compass,
  ShieldCheck,
  MessageSquare,
  Copy,
  Check
} from 'lucide-vue-next'

const props = defineProps({
  result: {
    type: Object,
    required: true
  }
})

const isCopied = ref(false)

const formalityPercentage = computed(() => {
  const score = props.result?.formalityIndex ?? 2
  return Math.min(Math.max((score / 10) * 100, 5), 100)
})

const formalityBadgeStyle = computed(() => {
  const score = props.result?.formalityIndex ?? 2
  if (score < 2.5) {
    return 'bg-red-950/80 border-red-700/60 text-red-300'
  } else if (score < 5.0) {
    return 'bg-amber-950/80 border-amber-700/60 text-amber-300'
  } else if (score < 7.5) {
    return 'bg-cyan-950/80 border-cyan-700/60 text-cyan-300'
  } else {
    return 'bg-emerald-950/80 border-emerald-700/60 text-emerald-300'
  }
})

const formalityProgressColor = computed(() => {
  const score = props.result?.formalityIndex ?? 2
  if (score < 2.5) {
    return 'bg-gradient-to-r from-red-600 to-amber-500'
  } else if (score < 5.0) {
    return 'bg-gradient-to-r from-amber-500 to-yellow-400'
  } else if (score < 7.5) {
    return 'bg-gradient-to-r from-cyan-500 to-blue-400'
  } else {
    return 'bg-gradient-to-r from-emerald-500 to-teal-400'
  }
})

async function copyAnalysis() {
  const r = props.result
  const textToCopy = `[SLANG_DECODER // AI REPORT]
EXPRESSÃO: "${r.query}"
CATEGORIA: ${r.category}
SIGNIFICADO CONTEXTUAL: ${r.meaning}
EQUIVALENTE: ${r.equivalent || 'N/A'}
ÍNDICE DE FORMALIDADE: ${r.formalityIndex.toFixed(1)}/10 (${r.formalityLevel})
CENÁRIO IDEAL: ${r.bestScenario}
ORIGEM: ${r.origin}

DIÁLOGO DEMONSTRATIVO:
${r.dialogue.speakerA}: ${r.dialogue.messageA}
${r.dialogue.speakerB}: ${r.dialogue.messageB}
(Nota: ${r.dialogue.contextNote})`

  try {
    await navigator.clipboard.writeText(textToCopy)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2200)
  } catch (err) {
    console.error('Falha ao copiar:', err)
  }
}
</script>

