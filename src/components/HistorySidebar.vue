<template>
  <aside class="w-full bg-cyber-card/90 rounded-xl border border-cyber-border shadow-cyber-card p-4 sm:p-5 backdrop-blur-md cyber-box">
    
    <!-- Sidebar Header -->
    <div class="flex items-center justify-between pb-3 mb-3 border-b border-cyber-border/70">
      <div class="flex items-center gap-2 text-xs font-mono text-slate-300">
        <History class="w-4 h-4 text-cyan-400" />
        <span class="font-bold tracking-wider uppercase">Histórico da Sessão</span>
        <span class="text-slate-500">({{ history.length }})</span>
      </div>

      <button
        v-if="history.length > 0"
        @click="$emit('clear-history')"
        type="button"
        title="Limpar histórico da sessão"
        class="text-[11px] font-mono text-slate-500 hover:text-red-400 flex items-center gap-1 transition-colors"
      >
        <Trash2 class="w-3 h-3" />
        <span>LIMPAR</span>
      </button>
    </div>

    <!-- History List -->
    <div v-if="history.length > 0" class="space-y-2.5">
      <div
        v-for="(item, index) in history"
        :key="index"
        @click="$emit('select-item', item)"
        class="group p-3 rounded-lg bg-cyber-darkest border transition-all cursor-pointer flex flex-col gap-1.5"
        :class="activeQuery === item.query 
          ? 'border-cyan-500/70 bg-cyan-950/20 shadow-neon-cyan' 
          : 'border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'"
      >
        <!-- Top row: Query & Arrow -->
        <div class="flex items-center justify-between">
          <span class="font-mono text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
            &ldquo;{{ item.query }}&rdquo;
          </span>
          <ArrowRight class="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

        <!-- Sub row: Meaning preview -->
        <p class="text-xs text-slate-400 line-clamp-1 font-sans">
          {{ item.meaning }}
        </p>

        <!-- Bottom row: Badges -->
        <div class="flex items-center justify-between text-[10px] font-mono pt-1 text-slate-500">
          <div class="flex items-center gap-1.5">
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {{ item.targetLanguage?.badge || 'EN' }}
            </span>
            <span class="px-1.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-amber-900/40">
              FORMALIDADE: {{ item.formalityIndex.toFixed(1) }}
            </span>
          </div>

          <div class="flex items-center gap-1 text-slate-500">
            <Clock class="w-3 h-3" />
            <span>{{ formatTime(item.timestamp) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty History State -->
    <div v-else class="py-6 text-center text-xs font-mono text-slate-500 space-y-2">
      <Terminal class="w-6 h-6 text-slate-700 mx-auto" />
      <p>NENHUMA CONSULTA REGISTRADA NA SESSÃO ATUAL</p>
      <p class="text-[11px] text-slate-600">Submeta uma expressão no terminal acima para registrar.</p>
    </div>

  </aside>
</template>

<script setup>
import { History, Trash2, ArrowRight, Clock, Terminal } from 'lucide-vue-next'

defineProps({
  history: {
    type: Array,
    default: () => []
  },
  activeQuery: {
    type: String,
    default: ''
  }
})

defineEmits(['select-item', 'clear-history'])

function formatTime(isoString) {
  if (!isoString) return 'agora'
  try {
    const d = new Date(isoString)
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  } catch {
    return 'recente'
  }
}
</script>

