<template>
  <div class="w-full bg-cyber-card/95 rounded-xl border border-cyan-500/50 shadow-neon-cyan p-5 sm:p-6 backdrop-blur-md cyber-box">
    
    <!-- Loading Header -->
    <div class="flex items-center justify-between pb-3 mb-4 border-b border-cyber-border/80">
      <div class="flex items-center gap-2.5">
        <div class="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
        <span class="text-xs sm:text-sm font-mono font-bold text-cyan-300 tracking-wider">
          PROCESSANDO REQUISIÇÃO SEMÂNTICA // NEURAL-RUNNER
        </span>
      </div>

      <div class="flex items-center gap-2 font-mono text-xs text-slate-400">
        <Cpu class="w-3.5 h-3.5 text-cyan-400 animate-spin" />
        <span>STATUS: PARSING</span>
      </div>
    </div>

    <!-- Terminal Code Compilation Logs -->
    <div class="bg-cyber-darkest rounded-lg p-4 font-mono text-xs space-y-2 border border-slate-800">
      
      <!-- Compilation Log Stream -->
      <div 
        v-for="(log, idx) in visibleLogs" 
        :key="idx" 
        class="flex items-start gap-2 text-slate-300 leading-relaxed transition-opacity duration-200"
      >
        <span class="text-cyan-400 font-bold shrink-0">&gt;</span>
        <span class="text-slate-500 shrink-0">[{{ log.time }}]</span>
        <span :class="log.colorClass">{{ log.text }}</span>
      </div>

      <!-- Active cursor line -->
      <div class="flex items-center gap-2 text-cyan-400 pt-1">
        <span>&gt;</span>
        <span class="text-slate-400">AGUARDANDO CONVERGÊNCIA DOS EMBEDDINGS</span>
        <span class="terminal-cursor"></span>
      </div>
    </div>

    <!-- Animated Progress Bar -->
    <div class="mt-4 space-y-1.5">
      <div class="flex justify-between text-[11px] font-mono">
        <span class="text-slate-400">COMPILANDO MATRIZ DE CONTEXTO</span>
        <span class="text-cyan-300 font-bold">{{ progress }}%</span>
      </div>
      <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
        <div 
          class="h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-300 transition-all duration-300 ease-out shadow-neon-cyan"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Cpu } from 'lucide-vue-next'

const logsQueue = [
  { time: '0.08s', text: 'INIT_LEXICAL_PARSER: Tokenizando string de entrada e extraindo morfemas...', colorClass: 'text-slate-300' },
  { time: '0.29s', text: 'VECTOR_LOOKUP: Mapeando no grafo semântico de dialetos urbanos e internet...', colorClass: 'text-cyan-300' },
  { time: '0.58s', text: 'CROSS_CULTURE_RESOLVER: Consultando corpus de anime, light novels e memes...', colorClass: 'text-emerald-300' },
  { time: '0.84s', text: 'CALC_FORMALITY_METRIC: Calculando índice diafásico na escala 0.0 - 10.0...', colorClass: 'text-amber-300' },
  { time: '1.12s', text: 'DIALOGUE_SYNTHESIS: Gerando simulação pragmática de diálogo real...', colorClass: 'text-purple-300' },
  { time: '1.30s', text: 'PACK_READY: Estrutura JSON validada. Despachando para a interface.', colorClass: 'text-emerald-400 font-semibold' }
]

const visibleLogs = ref([])
const progress = ref(15)

let timer = null
let progressTimer = null

onMounted(() => {
  let index = 0
  visibleLogs.value.push(logsQueue[0])

  timer = setInterval(() => {
    index++
    if (index < logsQueue.length) {
      visibleLogs.value.push(logsQueue[index])
    }
  }, 230)

  progressTimer = setInterval(() => {
    if (progress.value < 94) {
      progress.value += Math.floor(Math.random() * 12) + 6
      if (progress.value > 96) progress.value = 96
    }
  }, 140)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
  if (progressTimer) clearInterval(progressTimer)
})
</script>

