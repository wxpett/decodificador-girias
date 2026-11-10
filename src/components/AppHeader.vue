<template>
  <header class="border-b border-cyber-border bg-cyber-darker/90 backdrop-blur-md sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
      
      <!-- Logo & Engine Identity -->
      <div class="flex items-center gap-3.5 self-start md:self-auto">
        <div class="relative flex items-center justify-center w-10 h-10 rounded-lg bg-cyber-dark border border-cyan-500/40 shadow-neon-cyan">
          <Terminal class="w-5 h-5 text-cyan-400" />
          <div class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
          <div class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
        </div>
        
        <div>
          <div class="flex items-center gap-2">
            <span class="text-lg font-bold font-mono tracking-wider text-white">
              SlangDecoder <span class="text-cyan-400">//</span> <span class="text-emerald-400">AI</span>
            </span>
            <span class="px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-800 rounded">
              v3.4.0-CORE
            </span>
          </div>
          <p class="text-xs text-slate-400 font-mono tracking-tight hidden sm:block">
            Motor de Análise Semântica, Gírias Regionais &amp; Tropos de Subcultura
          </p>
        </div>
      </div>

      <!-- System Telemetry & Status Badges -->
      <div class="flex items-center flex-wrap gap-2.5 sm:gap-3 text-xs font-mono self-end md:self-auto">
        
        <!-- API Online Status -->
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyber-dark border border-slate-800 text-slate-300">
          <div class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span class="text-slate-400">API:</span>
          <span class="text-emerald-400 font-semibold tracking-wide">ONLINE</span>
        </div>

        <!-- Latency Monitor -->
        <div class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyber-dark border border-slate-800 text-slate-400">
          <Activity class="w-3.5 h-3.5 text-cyan-400" />
          <span>LATÊNCIA:</span>
          <span class="text-cyan-400 font-semibold">14ms</span>
        </div>

        <!-- Engine Mode -->
        <div class="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyber-dark border border-slate-800 text-slate-400">
          <Cpu class="w-3.5 h-3.5 text-purple-400" />
          <span>MODELO:</span>
          <span class="text-purple-300 font-semibold">NEURAL-CTX</span>
        </div>

        <!-- Scanline Overlay Toggle -->
        <button 
          @click="$emit('toggle-scanlines')" 
          type="button"
          :title="scanlinesEnabled ? 'Desativar efeito scanlines' : 'Ativar efeito scanlines'"
          class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs transition-colors"
          :class="scanlinesEnabled 
            ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300 shadow-neon-cyan' 
            : 'bg-cyber-dark border-slate-800 text-slate-400 hover:text-slate-200'"
        >
          <Layers class="w-3.5 h-3.5" />
          <span class="hidden lg:inline">CRT SCAN</span>
        </button>

      </div>
    </div>
  </header>
</template>

<script setup>
import { Terminal, Cpu, Activity, Layers } from 'lucide-vue-next'

defineProps({
  scanlinesEnabled: {
    type: Boolean,
    default: true
  }
})

defineEmits(['toggle-scanlines'])
</script>

