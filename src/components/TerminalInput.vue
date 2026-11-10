<template>
  <div class="w-full bg-cyber-card/90 rounded-xl border border-cyber-border shadow-cyber-card p-4 sm:p-6 backdrop-blur-md relative overflow-hidden cyber-box">
    
    <!-- Terminal Header Line -->
    <div class="flex items-center justify-between pb-3 mb-4 border-b border-cyber-border/70 text-xs font-mono">
      <div class="flex items-center gap-2 text-slate-400">
        <span class="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
        <span class="ml-2 text-slate-300 font-semibold tracking-wide">bash --session=neural-slang-parser</span>
      </div>

      <div class="flex items-center gap-3 text-slate-500">
        <span class="hidden sm:inline">UTF-8 // CONTEXT_ENGINE</span>
        <span class="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 text-[11px]">
          INTERPRETER READY
        </span>
      </div>
    </div>

    <!-- Main Input Form -->
    <form @submit.prevent="handleSubmit" class="space-y-4">
      
      <!-- Command Prompt Text Area Container -->
      <div class="relative rounded-lg bg-cyber-darkest border border-slate-800/90 focus-within:border-cyan-500/70 focus-within:shadow-neon-cyan transition-all">
        
        <!-- Terminal Command Prefix -->
        <div class="flex items-center gap-2 px-3 pt-3 text-xs font-mono text-cyan-400 select-none">
          <Terminal class="w-3.5 h-3.5 text-cyan-400" />
          <span class="text-emerald-400 font-bold">engine@neural</span><span class="text-slate-500">:</span><span class="text-cyan-300">~/slang-lexicon</span><span class="text-slate-400">$</span>
          <span class="text-slate-500 text-[11px] ml-auto font-mono">
            {{ inputModel.length }} / 160 CARACTERES
          </span>
        </div>

        <!-- Styled Textarea -->
        <textarea
          ref="inputRef"
          v-model="inputModel"
          @keydown.enter.exact.prevent="handleSubmit"
          rows="3"
          maxlength="160"
          :disabled="isLoading"
          placeholder="Digite uma gíria, expressão regional ou jargão (ex: 'O pai tá on', 'Dattebayo')..."
          class="w-full px-3 py-2.5 bg-transparent text-slate-100 placeholder-slate-500 font-mono text-sm sm:text-base resize-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed selection:bg-cyan-500/40"
        ></textarea>

        <!-- Command bar footer within input box -->
        <div class="flex items-center justify-between px-3 pb-2.5 pt-1 text-[11px] font-mono text-slate-500 border-t border-slate-900">
          <div class="flex items-center gap-1.5">
            <CornerDownLeft class="w-3 h-3 text-slate-400" />
            <span>Pressione <kbd class="px-1 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">Enter</kbd> para submeter</span>
          </div>

          <button
            v-if="inputModel.length > 0"
            @click="clearInput"
            type="button"
            class="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-1"
          >
            <RotateCcw class="w-3 h-3" />
            <span>LIMPAR</span>
          </button>
        </div>

      </div>

      <!-- Control Bar: Target Language Switcher & Submit Action -->
      <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 pt-1">
        
        <!-- Target Language Selector -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-2">
          <label class="text-xs font-mono text-slate-400 flex items-center gap-1.5 shrink-0">
            <Languages class="w-3.5 h-3.5 text-cyan-400" />
            <span>REGISTRO / DESTINO:</span>
          </label>

          <div class="grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5">
            <button
              v-for="target in targets"
              :key="target.id"
              type="button"
              @click="selectedTarget = target.id"
              :disabled="isLoading"
              class="px-2.5 py-1.5 rounded text-xs font-mono border transition-all text-left flex items-center gap-1.5"
              :class="selectedTarget === target.id
                ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300 shadow-neon-cyan font-semibold'
                : 'bg-cyber-dark border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'"
            >
              <span class="w-1.5 h-1.5 rounded-full" :class="selectedTarget === target.id ? 'bg-cyan-400' : 'bg-slate-600'"></span>
              <span>{{ target.badge }}</span>
              <span class="hidden md:inline text-[10px] text-slate-400">({{ target.label.split(' ')[0] }})</span>
            </button>
          </div>
        </div>

        <!-- Submit Button with Glow Effect -->
        <button
          type="submit"
          :disabled="isLoading || !inputModel.trim()"
          class="relative group px-6 py-2.5 rounded-lg font-mono font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2.5 overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          :class="inputModel.trim() && !isLoading
            ? 'bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 text-slate-950 shadow-neon-cyan hover:shadow-neon-green hover:scale-[1.01]'
            : 'bg-slate-800 text-slate-500 border border-slate-700'"
        >
          <!-- Processing state or default icon -->
          <template v-if="isLoading">
            <Cpu class="w-4 h-4 animate-spin text-slate-950" />
            <span>DECODIFICANDO VIA NEURAL-CTX...</span>
          </template>
          <template v-else>
            <Zap class="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>DECODIFICAR EXPRESSÃO</span>
            <ArrowRight class="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </template>
        </button>

      </div>

    </form>

    <!-- Quick Exploration Chips / Test Slangs -->
    <div class="mt-5 pt-4 border-t border-cyber-border/70">
      <div class="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2.5">
        <Sparkles class="w-3.5 h-3.5 text-cyan-400" />
        <span class="text-slate-300 font-semibold">AMOSTRAS SUGERIDAS (CLIQUE PARA TESTAR):</span>
      </div>

      <div class="flex flex-wrap gap-2">
        <button
          v-for="sample in sampleSlangs"
          :key="sample.term"
          @click="selectSample(sample)"
          type="button"
          :disabled="isLoading"
          class="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 hover:border-cyan-500/60 hover:text-cyan-300 hover:bg-cyan-950/30 text-slate-300 text-xs font-mono transition-all flex items-center gap-1.5"
        >
          <span class="text-slate-500">#</span>
          <span>{{ sample.term }}</span>
          <span class="text-[10px] text-slate-500 bg-slate-800 px-1 rounded">{{ sample.tag }}</span>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Terminal,
  CornerDownLeft,
  RotateCcw,
  Languages,
  Zap,
  Cpu,
  ArrowRight,
  Sparkles
} from 'lucide-vue-next'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  },
  targets: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['submit-query'])

const inputModel = ref('')
const selectedTarget = ref('en')
const inputRef = ref(null)

const sampleSlangs = [
  { term: 'O pai tá on', tag: 'BR / Web', target: 'en' },
  { term: 'Tankou não', tag: 'Gamer', target: 'pt_formal' },
  { term: 'Dattebayo', tag: 'Anime', target: 'en' },
  { term: 'Based', tag: 'Reddit', target: 'pt_formal' },
  { term: 'Cringe', tag: 'Gen-Z', target: 'pt_formal' },
  { term: 'Isekai', tag: 'Light Novel', target: 'pop_lore' },
  { term: 'Meteu essa', tag: 'Carioca', target: 'es' },
  { term: 'Arretado', tag: 'Nordeste', target: 'en' },
  { term: 'Poggers', tag: 'Twitch', target: 'pt_neutro' },
  { term: 'Foi de Vasco', tag: 'Meme BR', target: 'en' },
  { term: 'Pegou a visão', tag: 'Trap / Rua', target: 'pt_formal' },
  { term: 'Tsundere', tag: 'Tropo Anime', target: 'pop_lore' },
  { term: 'No cap', tag: 'Global Slang', target: 'pt_neutro' },
  { term: 'De cria', tag: 'Favela / RJ', target: 'en' },
]

function handleSubmit() {
  const query = inputModel.value.trim()
  if (!query || props.isLoading) return
  emit('submit-query', { query, targetLang: selectedTarget.value })
}

function selectSample(sample) {
  inputModel.value = sample.term
  selectedTarget.value = sample.target
  handleSubmit()
}

function clearInput() {
  inputModel.value = ''
  if (inputRef.value) inputRef.value.focus()
}

defineExpose({
  setInput(text, target) {
    inputModel.value = text
    if (target) selectedTarget.value = target
  }
})
</script>

