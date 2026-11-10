# SlangDecoder // AI (Decodificador de Gírias e Expressões)

Motor de inferência contextual, sociolinguística urbana e desconstrução de jargões pop/anime desenvolvido em **Vue 3 (Composition API)**, **Vite** e **Tailwind CSS**, com visual cyberpunk/terminal dark mode e foco em precisão lexical.

---

## Stack Tecnológica

- **Vue 3**: Composition API (`<script setup>`) com reatividade nativa.
- **Vite 6**: Bundler ultra-rápido para desenvolvimento e build.
- **Tailwind CSS**: Estilização terminal dark mode (`bg-[#050811]`, neon cyan `#00f0ff`, neon emerald `#00ff88`).
- **Lucide Vue**: Ícones vetoriais modernos e limpos (**Zero Emojis** em toda a interface).
- **Serviço de IA Mockado (`aiService.js`)**: Base rica com dezenas de termos curados (gírias BR, regionalismos nordestinos/sulistas, termos de light novels/anime, memes de Twitch/Reddit) e algoritmo fallback gerador de análises estruturadas para termos arbitrários.

---

## Arquitetura de Componentes

```
src/
├── services/
│   └── aiService.js         # Motor semântico com latência simulada e fallback inteligente
├── components/
│   ├── AppHeader.vue        # Header com logo estilizada, status de API, telemetria e toggle CRT
│   ├── TerminalInput.vue    # Linha de comando com seletor de idioma alvo e chips de amostra
│   ├── TerminalLoading.vue  # Simulação de compilação em terminal com logs e barra de progresso
│   ├── ResultCard.vue       # Cartão de contexto com tradução, medidor de formalidade e chat demonstrativo
│   ├── HistorySidebar.vue   # Histórico de sessão das últimas 5 consultas com reload instantâneo
│   └── SystemFooter.vue     # Rodapé técnico com especificações e status do sandbox
├── App.vue                  # Componente orquestrador principal
├── main.js                  # Ponto de entrada Vue
└── style.css                # Diretivas Tailwind, scanlines CRT e custom scrollbars
```

---

## Comandos para Inicializar o Projeto

### 1. Instalar as dependências
```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento local
```bash
npm run dev
```
> O servidor iniciará em `http://localhost:5173`.

### 3. Gerar a build de produção
```bash
npm run build
```

### 4. Testar a build de produção localmente
```bash
npm run preview
```

---

## Funcionalidades Principais

1. **Terminal de Entrada Interativo**:
   - Atalho de teclado `<Enter>` para submissão imediata.
   - Alternador rápido entre registros: Inglês, Espanhol, Português Formal, Português Neutro e Análise Pop Lore.
   - Amostras rápidas clicáveis para teste de 1 clique (`O pai tá on`, `Tankou não`, `Dattebayo`, `Based`, `Cringe`, `Isekai`, `Meteu essa`, `Arretado`, `Poggers`, `Foi de Vasco`, `Pegou a visão`, `Tsundere`, `No cap`, `De cria`).

2. **Simulação de Compilação no Terminal**:
   - Animação com logs técnicos de compilação semântica em tempo real durante a latência de 1.4s.

3. **Cartão de Contexto**:
   - Tradução contextual direta e equivalente idiomático funcional.
   - Medidor visual da escala diafásica de formalidade (0 a 10) com badges categorizados.
   - Cenário ideal de recomendação e restrições de uso.
   - Histórico etimológico e papel sintático.
   - Mini chat demonstrativo com diálogo realista em ambiente de terminal.
   - Botão para copiar a análise completa para a área de transferência.

4. **Histórico da Sessão**:
   - Armazenamento em memória e persistência em `localStorage` das últimas expressões decodificadas, permitindo retorno instantâneo.

