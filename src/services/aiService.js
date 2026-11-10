/**
 * SlangDecoder AI - Neural Context Engine Mock Service
 * Simulates high-accuracy lexical analysis, syntactic parsing,
 * and sociolinguistic mapping for slangs, regionalisms, and pop culture terms.
 */

// Comprehensive knowledge base of slangs, regional terms, anime/light novel expressions and internet jargon
const SLANG_DATABASE = [
  {
    terms: ['o pai ta on', 'o pai tá on', 'pai ta on', 'pai tá on'],
    category: 'Cultura Pop / Esportes & Internet BR',
    syntacticRole: 'Expressão idiomática de autoafirmação',
    origin: 'Cunhada pelo jogador Neymar Jr. durante as fases finais da Champions League em 2020, rapidamente adotada pelo ecossistema gamer e redes sociais.',
    formalityIndex: 2.2,
    formalityLevel: 'Coloquial Urbano / Redes Sociais',
    confidenceScore: '99.2%',
    translations: {
      en: {
        meaning: 'I am ready, at peak performance, active and available to dominate or take charge.',
        equivalent: "The boss is in the building / I'm locked in / Back in business",
        bestScenario: 'Vitórias pessoais, início de partidas competitivas, retorno a uma atividade após pausa ou demonstração de autoconfiança.',
        dialogue: {
          speakerA: 'OPERADOR_01',
          messageA: 'A sprint final abre em 10 minutos. O deploy do backend está concluído?',
          speakerB: 'OPERADOR_02',
          messageB: 'Servidores ativos e branch mesclada. O pai tá on, pode soltar a carga.',
          contextNote: 'Sinaliza prontidão operacional irrestrita e confiança no resultado.'
        }
      },
      es: {
        meaning: 'Estoy listo, en mi mejor momento y completamente disponible para resolver la situación.',
        equivalent: 'El jefe está listo / Estoy a tope / Volví con todo',
        bestScenario: 'Celebraciones de metas alcanzadas, regreso triunfal o demostración de alta confianza.',
        dialogue: {
          speakerA: 'AGENTE_ALPHA',
          messageA: 'El servidor está bajo ataque de tráfico masivo. ¿Tienes el parche listo?',
          speakerB: 'AGENTE_BETA',
          messageB: 'Compilado y mitigando. O pai tá on, no entra nada.',
          contextNote: 'Uso enfático para denotar control absoluto de la situación.'
        }
      },
      pt_formal: {
        meaning: 'Declaração enfática de disponibilidade, prontidão operacional e alta competência perante um desafio iminente.',
        equivalent: 'Estou plenamente apto e em operação ativa.',
        bestScenario: 'Conversão conceitual em relatórios de disponibilidade ou apresentações de prontidão técnica.',
        dialogue: {
          speakerA: 'DIRETOR_OP',
          messageA: 'O sistema principal suportará o volume do trimestre?',
          speakerB: 'ENGENHEIRO_LEAD',
          messageB: 'Cluster estabilizado. Em termos contemporâneos, estamos em regime de prontidão total.',
          contextNote: 'Transposição da atitude de segurança técnica para registro formal.'
        }
      },
      pt_neutro: {
        meaning: 'Estou pronto, disponível e focado para agir com eficiência.',
        equivalent: 'Estou na ativa e 100% pronto.',
        bestScenario: 'Conversas cotidianas com colegas de trabalho, grupos de amigos ou mensageria instantânea.',
        dialogue: {
          speakerA: 'DEV_FRONT',
          messageA: 'Preciso de revisão urgente no PR do design system.',
          speakerB: 'DEV_BACK',
          messageB: 'Já estou no VS Code. O pai tá on, manda o link.',
          contextNote: 'Comunicação direta indicando foco imediato na demanda.'
        }
      },
      pop_lore: {
        meaning: 'Arquétipo do protagonista que desperta o pico de sua força na hora decisiva da narrativa (ex: arco do torneio).',
        equivalent: 'Buff de prontidão crítica / Full Power mode ativado',
        bestScenario: 'Análise de personagens em fóruns de mangá/anime quando assumem a liderança em uma batalha decisiva.',
        dialogue: {
          speakerA: 'CRÍTICO_ANIME',
          messageA: 'O protagonista passou 12 episódios treinando no templo isolado.',
          speakerB: 'ANALISTA_LORE',
          messageB: 'Quando ele pisou na arena de confronto, ficou claro: o pai tá on.',
          contextNote: 'Evoca o clímax em que o personagem atinge seu potencial latente.'
        }
      }
    }
  },
  {
    terms: ['tankou nao', 'tankou não', 'nao tankei', 'não tankei', 'intankavel', 'intankável', 'tankar'],
    category: 'Gamer / Slang de Streaming & Discord',
    syntacticRole: 'Verbo adaptado do inglês ("to tank") com sentido de suporte e absorção de impacto emocional ou cômico',
    origin: 'Termo derivado de jogos de RPG/MMO (absorver dano massivo). No Brasil, transmutou-se para a capacidade de suportar situações surreais, absurdas ou crises de riso.',
    formalityIndex: 1.5,
    formalityLevel: 'Gíria Marginal / Gamer & Twitter',
    confidenceScore: '98.7%',
    translations: {
      en: {
        meaning: 'Could not endure, take the blow, withstand the psychological weight or stop laughing at the absurdity.',
        equivalent: "Couldn't handle it / Broke down laughing / Lost my composure",
        bestScenario: 'Reação a piadas involuntárias, notícias inacreditáveis ou momentos de caos generalizado.',
        dialogue: {
          speakerA: 'PILOTO_RED',
          messageA: 'Você viu a justificativa que o cliente deu para apagar o banco em produção?',
          speakerB: 'PILOTO_BLUE',
          messageB: 'Eu vi o print no Slack e não tankei, fechei a aba na hora.',
          contextNote: 'Expressa perda involuntária de compostura perante o surreal.'
        }
      },
      es: {
        meaning: 'No soportó el impacto, no pudo aguantar la risa o sucumbió ante una situación insólita.',
        equivalent: 'No pude aguantar / No me dio el cuero / Me superó por completo',
        bestScenario: 'Comentarios en comunidades virtuales, streams de partidas o anécdotas de trabajo.',
        dialogue: {
          speakerA: 'USER_77',
          messageA: 'El jefe intentó explicar la arquitectura usando dibujos infantiles.',
          speakerB: 'USER_88',
          messageB: 'No tankeó nadie en la llamada, todos mutaron los micrófonos.',
          contextNote: 'Representa la imposibilidad de contener la reacción ante lo absurdo.'
        }
      },
      pt_formal: {
        meaning: 'Incapacidade manifesta de absorver a pressão cognitiva, o estresse situacional ou a carga de choque provocada por determinado evento.',
        equivalent: 'Não suportou o impacto / Excedeu a capacidade de tolerância.',
        bestScenario: 'Tradução analítica de comportamento de usuários em relatórios de estresse e ergonomia de interfaces.',
        dialogue: {
          speakerA: 'AUDITOR_SISTEMA',
          messageA: 'Qual foi o ponto de falha do operador no incidente?',
          speakerB: 'GERENTE_RISCO',
          messageB: 'A cascata de alertas sobrecarregou o turno; a equipe não resistiu à intensidade do estímulo.',
          contextNote: 'Substitui a gíria por vocabulário técnico de resiliência cognitiva.'
        }
      },
      pt_neutro: {
        meaning: 'Não consegui aguentar a situação, segurar o riso ou lidar com a complexidade do momento.',
        equivalent: 'Não aguentei / Não dei conta / Fiquei sem reação.',
        bestScenario: 'Conversas cotidianas entre colegas sobre histórias engraçadas ou estressantes do dia a dia.',
        dialogue: {
          speakerA: 'MONITOR_01',
          messageA: 'Ele realmente tentou culpar o estagiário na reunião geral?',
          speakerB: 'MONITOR_02',
          messageB: 'Sim, e a cara do estagiário foi tão chocada que ninguém aguentou.',
          contextNote: 'Expressão descontraída de quebra de autocontrole.'
        }
      },
      pop_lore: {
        meaning: 'Colapso de defesa tipo Tank Buster em raids de MMORPG; na narrativa de mangá, representa quebra da guarda do personagem.',
        equivalent: 'Armadura quebrada / Colapso de defesa absoluta',
        bestScenario: 'Discussões sobre balanceamento de combate em JRPGs ou análises de cenas de shonen.',
        dialogue: {
          speakerA: 'THEORIST_01',
          messageA: 'O vilão disparou o golpe supremo à queima-roupa.',
          speakerB: 'THEORIST_02',
          messageB: 'A barreira mágica colapsou em um segundo, o guerreiro tankou não.',
          contextNote: 'Metáfora direta ao esgotamento de pontos de vida e defesa.'
        }
      }
    }
  },
  {
    terms: ['dattebayo', 'ttebayo'],
    category: 'Anime / Shonen Tradicional (Japonês)',
    syntacticRole: 'Partícula modal enfática finalizadora (gobi / 語尾)',
    origin: 'Bordão icônico de Naruto Uzumaki na franquia criada por Masashi Kishimoto. Trata-se de uma contração enfática de "da te ba yo", sem tradução literal exata no vocabulário comum.',
    formalityIndex: 0.8,
    formalityLevel: 'Gíria Marginal / Ficcional & Informal Extremo',
    confidenceScore: '99.8%',
    translations: {
      en: {
        meaning: 'An emphatic catchphrase conveying determination, stubbornness, and personal certainty (often localized as "Believe it!").',
        equivalent: 'Believe it! / You better know it! / That is just how it is!',
        bestScenario: 'Comunidades de anime, convenções, debates sobre técnicas de dublagem e lore de shonen.',
        dialogue: {
          speakerA: 'SHINOBI_SCOUT',
          messageA: 'As chances de aprovação nesta missão de rank S são inferiores a 4%.',
          speakerB: 'SHINOBI_HERO',
          messageB: 'Eu nunca retrocedo na minha palavra nem desisto, Dattebayo!',
          contextNote: 'Reafirmação obstinada da própria determinação contra todas as probabilidades.'
        }
      },
      es: {
        meaning: 'Muletilla de remate oracional que denota terquedad, convicción absoluta y desafío abierto a la autoridad.',
        equivalent: '¡De veras! / ¡Créelo! / ¡Así son las cosas!',
        bestScenario: 'Debates sobre doblaje latino e ibérico de animación japonesa.',
        dialogue: {
          speakerA: 'SENSEI_JONIN',
          messageA: 'Esa técnica requiere diez años de manipulación de chakra.',
          speakerB: 'APPRENTICE',
          messageB: 'La dominaré en tres días y seré el líder de la aldea, ¡de veras!',
          contextNote: 'Transmite el ímpeto juvenil y la resolución inquebrantable del hablante.'
        }
      },
      pt_formal: {
        meaning: 'Marcador discursivo de convicção subjetiva irredutível e asseveração enfática de identidade e propósito.',
        equivalent: 'Com absoluta certeza e inegável determinação.',
        bestScenario: 'Análise linguística de partículas oracionais em teses sobre tradução audiovisual nipônica.',
        dialogue: {
          speakerA: 'LINGUISTA_ORIENTAL',
          messageA: 'Como categorizar os sufixos verbais idioletais na oratória ficcional?',
          speakerB: 'PESQUISADOR_LITERARIO',
          messageB: 'Funcionam como reforçadores de compromisso existencial do enunciador frente ao coletivo.',
          contextNote: 'Classificação estrutural do fenômeno estilístico em nível acadêmico.'
        }
      },
      pt_neutro: {
        meaning: 'Pode acreditar! É a minha palavra e é exatamente isso que vai acontecer.',
        equivalent: 'Pode apostar nisso! / É isso aí!',
        bestScenario: 'Expressões entre fãs de cultura pop e cosplayers em tom de brincadeira.',
        dialogue: {
          speakerA: 'COMPRADOR',
          messageA: 'Você realmente vai conseguir terminar essa fantasia de cosplay até amanhã cedo?',
          speakerB: 'MAKER',
          messageB: 'Vou virar a noite se precisar, mas entrego pronta, pode crer!',
          contextNote: 'Compromisso veemente de honra pessoal descontraído.'
        }
      },
      pop_lore: {
        meaning: 'Herança genética/linguística do clã Uzumaki (sua mãe Kushina utilizava "Dattebane" e seu filho Boruto usa "Dattebasa").',
        equivalent: 'Idioleto geracional do Clã Uzumaki',
        bestScenario: 'Artigos enciclopédicos sobre construção de mundo de Masashi Kishimoto.',
        dialogue: {
          speakerA: 'WIKI_CONTRIBUTOR',
          messageA: 'Por que Kushina e Boruto possuem maneirismos vocais tão semelhantes?',
          speakerB: 'LORE_ARCHIVIST',
          messageB: 'A partícula serve como marca fônica hereditária na linhagem materna do personagem.',
          contextNote: 'Análise genealógica dos recursos estilísticos na série.'
        }
      }
    }
  },
  {
    terms: ['based', 'baseado'],
    category: 'Internet / Cultura de Fóruns & Memes Globais',
    syntacticRole: 'Adjetivo avaliativo',
    origin: 'Originalmente criado pelo rapper Lil B ("The BasedGod"), posteriormente adotado por fóruns como 4chan e Reddit para elogiar quem expressa sua opinião sincera sem medo de reprovação social.',
    formalityIndex: 2.0,
    formalityLevel: 'Coloquial Urbano / Fóruns & Twitter',
    confidenceScore: '97.5%',
    translations: {
      en: {
        meaning: 'Courageous, unapologetic, acting in accordance with authentic values without caring about public backlash.',
        equivalent: 'Based / Unapologetically authentic / Chad behavior',
        bestScenario: 'Comentários de apoio a posições polêmicas porém lógicas ou atitudes firmes.',
        dialogue: {
          speakerA: 'NET_PULSE',
          messageA: 'Ele recusou a oferta milionária porque o código feria a privacidade dos usuários.',
          speakerB: 'CIPHER_SEC',
          messageB: 'Extremamente based. Poucos mantêm a integridade quando a quantia sobe.',
          contextNote: 'Aprovação moral de conduta inflexível.'
        }
      },
      es: {
        meaning: 'Actitud de quien expresa verdades incómodas o actúa con total integridad sin preocuparse por la opinión pública.',
        equivalent: 'Basado / Auténtico / Valiente',
        bestScenario: 'Foros de discusión tecnológica, debates sobre software libre e independencia digital.',
        dialogue: {
          speakerA: 'RED_DEV',
          messageA: 'Eliminó todas las dependencias comerciales y reescribió el núcleo en Rust.',
          speakerB: 'SYS_ADMIN',
          messageB: 'Absolutamente basado. Menos deuda técnica, más soberanía.',
          contextNote: 'Elogio enfático a decisiones técnicas puristas.'
        }
      },
      pt_formal: {
        meaning: 'Comportamento caracterizado por convicção ideológica irredutível, autenticidade e independência de pressões consensuais.',
        equivalent: 'Íntegro / Fiel aos próprios preceitos / Desprovido de afetação conformista.',
        bestScenario: 'Ensaios sociológicos sobre dinâmicas tribais e autenticidade na era da reputação digital.',
        dialogue: {
          speakerA: 'SOCIOLOGO_DIGITAL',
          messageA: 'Como a subcultura contemporânea valida a coerência individual frente ao cancelamento?',
          speakerB: 'DEBATEDOR',
          messageB: 'Por meio do conceito de autenticidade radical indiferente à aprovação hegemônica.',
          contextNote: 'Desconstrução sociológica do termo para contextos acadêmicos.'
        }
      },
      pt_neutro: {
        meaning: 'Pessoa firme que fala a verdade e faz o que acredita sem ligar para a opinião alheia.',
        equivalent: 'Sensato / Corajoso / Mandou a real.',
        bestScenario: 'Conversas cotidianas ao elogiar uma decisão difícil mas correta tomada por alguém.',
        dialogue: {
          speakerA: 'COLABORADOR_A',
          messageA: 'Ele disse ao diretor que o prazo de entrega era irrealista e se recusou a aceitar horas extras abusivas.',
          speakerB: 'COLABORADOR_B',
          messageB: 'Mandou a real. Decisão corretíssima e corajosa.',
          contextNote: 'Validação entre pares de uma atitude sensata e honesta.'
        }
      },
      pop_lore: {
        meaning: 'Atributo de personagens estóicos que recusam o status quo do mundo em que habitam para seguir sua própria diretriz moral.',
        equivalent: 'Conduta estoica / Protagonista inconformista',
        bestScenario: 'Análise de personagens como Guts (Berserk) ou Kiritsugu (Fate/Zero).',
        dialogue: {
          speakerA: 'ANALISTA_FICTION',
          messageA: 'O mercenário destruiu o artefato sagrado que todos os reinos cobiçavam.',
          speakerB: 'HISTORIADOR_LORE',
          messageB: 'Uma escolha based que impediu a guerra total mesmo custando sua reputação.',
          contextNote: 'Julgamento narrativo sobre integridade dramática.'
        }
      }
    }
  },
  {
    terms: ['cringe', 'vergonha alheia', 'paia'],
    category: 'Internet / Geração Z & Cultura Pop',
    syntacticRole: 'Adjetivo avaliativo de constrangimento',
    origin: 'Empréstimo da língua inglesa (verbo to cringe = encolher-se de vergonha), popularizado no Brasil por volta de 2020-2021 em confrontos geracionais (Millennials vs Gen Z).',
    formalityIndex: 2.1,
    formalityLevel: 'Coloquial Urbano / Redes Sociais',
    confidenceScore: '98.9%',
    translations: {
      en: {
        meaning: 'Extremely embarrassing, secondhand embarrassment inducing, socially awkward or painfully out of touch.',
        equivalent: 'Cringe / Secondhand embarrassment / Painfully awkward',
        bestScenario: 'Situações de marketing corporativo forçado tentando parecer jovem ou discursos desconectados.',
        dialogue: {
          speakerA: 'PRODUTO_01',
          messageA: 'A diretoria gravou uma dancinha de 15 segundos para anunciar a demissão em massa.',
          speakerB: 'PRODUTO_02',
          messageB: 'Vi no feed interno e senti dor física. Nível supremo de cringe.',
          contextNote: 'Descreve constrangimento profundo diante de desconexão social.'
        }
      },
      es: {
        meaning: 'Sensación aguda de vergüenza ajena provocada por actos forzados o ridículos.',
        equivalent: 'Pena ajena / Vergüenza ajena / Cortante',
        bestScenario: 'Críticas a campañas publicitarias fuera de lugar o interacciones sociales tensas.',
        dialogue: {
          speakerA: 'DISENADOR_1',
          messageA: 'El cliente intentó hablar con jergas juveniles durante toda la presentación ejecutiva.',
          speakerB: 'DISENADOR_2',
          messageB: 'Fue una sesión de pura vergüenza ajena, nadie sabía dónde mirar.',
          contextNote: 'Reacción natural frente a una actuación forzada y desentonada.'
        }
      },
      pt_formal: {
        meaning: 'Desconforto empático derivado da observação de conduta socialmente inábil, anacrônica ou inadequada.',
        equivalent: 'Constrangimento vicário / Inconveniência comportamental ostensiva.',
        bestScenario: 'Relatórios sobre comunicação de marca, relações públicas e adequação institucional.',
        dialogue: {
          speakerA: 'CONSULTOR_RP',
          messageA: 'Como o público reagiu à tentativa de jovialidade forçada do porta-voz?',
          speakerB: 'ANALISTA_MARCA',
          messageB: 'Houve rejeição com sentimento de inadequação contextual e ruído reputacional.',
          contextNote: 'Diagnóstico corporativo do efeito repulsivo de comunicação forçada.'
        }
      },
      pt_neutro: {
        meaning: 'Sensação incômoda de vergonha alheia quando alguém passa dos limites ou age de forma forçada.',
        equivalent: 'Vergonha alheia / Desconfortável / Sem graça.',
        bestScenario: 'Comentários entre amigos sobre situações embaraçosas ocorridas em eventos ou reuniões.',
        dialogue: {
          speakerA: 'COLEGA_A',
          messageA: 'Ele subiu no palco e começou a cantar sem afinação nenhuma para quebrar o gelo.',
          speakerB: 'COLEGA_B',
          messageB: 'Nossa, que vergonha alheia. Fiquei desconfortável só de assistir.',
          contextNote: 'Avaliação comum e espontânea de momento embaraçoso.'
        }
      },
      pop_lore: {
        meaning: 'Síndrome do Chuunibyou (delírios juvenis de grandeza mágica) provocando choque com a realidade concreta.',
        equivalent: 'Síndrome de oitava série / Momento Chuunibyou',
        bestScenario: 'Tropos de comédia romântica ou comédias escolares japonesas.',
        dialogue: {
          speakerA: 'LEITOR_NOVEL',
          messageA: 'O protagonista tentou invocar o Dragão Negro das Trevas na cantina da escola.',
          speakerB: 'MODERADOR_LORE',
          messageB: 'Exemplo de manual de vergonha alheia Chuunibyou antes do amadurecimento.',
          contextNote: 'Referência ao clássico clichê de desajuste cósmico adolescente em light novels.'
        }
      }
    }
  },
  {
    terms: ['isekai', 'mundo paralelo', 'reencarnar'],
    category: 'Light Novels / Anime / Tropos de Ficção Japonesa',
    syntacticRole: 'Substantivo masculino (termo japonês: 異世界 - "outro mundo")',
    origin: 'Gênero literário popularizado na plataforma japonesa Shōsetsuka ni Narō. Consiste no transporte, invocação ou reencarnação do protagonista da Terra para um mundo fantástico.',
    formalityIndex: 4.5,
    formalityLevel: 'Casual / Literatura & Cultura Pop',
    confidenceScore: '99.5%',
    translations: {
      en: {
        meaning: 'Subgenre of portal fantasy where a normal protagonist is transported or reincarnated into a fantasy, game-like world.',
        equivalent: 'Parallel world fantasy / Otherworld portal adventure',
        bestScenario: 'Catalogação de acervos de mangás, sinopses de Light Novels e análises narratológicas.',
        dialogue: {
          speakerA: 'EDITOR_US',
          messageA: 'The new manuscript features a desk worker hit by a delivery truck who awakens as a wizard.',
          speakerB: 'CURATOR',
          messageB: 'Classic Isekai formula with game mechanics interface, approved for the autumn season.',
          contextNote: 'Identificação imediata da estrutura narrativa do gênero.'
        }
      },
      es: {
        meaning: 'Subgénero de fantasía donde el protagonista es transferido o renace en un mundo paralelo con reglas mágicas.',
        equivalent: 'Fantasía de reencarnación en otro mundo',
        bestScenario: 'Críticas de entretenimiento, recomendaciones editoriais e índices de novelas ligeras.',
        dialogue: {
          speakerA: 'LECTOR_ES',
          messageA: '¿De qué trata la nueva serie número uno de ventas en Tokio?',
          speakerB: 'TRADUCTOR',
          messageB: 'Es un isekai donde un bibliotecario renace en un reino que prohíbe el papel.',
          contextNote: 'Explicación del motor argumental principal.'
        }
      },
      pt_formal: {
        meaning: 'Estrutura diegética de fantasia escapista baseada no translado extradimensional ou reencarnação metempsicótica do protagonista em cosmos alternativo.',
        equivalent: 'Narrativa de travessia interdimensional de fantasia.',
        bestScenario: 'Estudos acadêmicos de literatura comparada, narrativas transmídia e antropologia do consumo cultural.',
        dialogue: {
          speakerA: 'PESQUISADOR_ACAD',
          messageA: 'Qual é o eixo central da ficção popular juvenil asiática contemporânea?',
          speakerB: 'ORIENTADOR',
          messageB: 'A preponderância do paradigma isekai como reflexo da exaustão laboral e busca por reinício existencial.',
          contextNote: 'Abordagem sociológica do apelo escapista da premissa.'
        }
      },
      pt_neutro: {
        meaning: 'História em que o personagem morre ou é teleportado para viver aventuras em um mundo mágico ou de videogame.',
        equivalent: 'História de reencarnação em outro mundo / Mundo mágico.',
        bestScenario: 'Recomendações casuais de séries e livros de entretenimento.',
        dialogue: {
          speakerA: 'LEITOR_01',
          messageA: 'Você tem indicação de uma história leve com magia e evolução de poderes?',
          speakerB: 'LEITOR_02',
          messageB: 'Procura por algum isekai recente; a premissa de começar do zero em outro mundo é muito divertida.',
          contextNote: 'Indicação temática descomplicada.'
        }
      },
      pop_lore: {
        meaning: 'Tropos essenciais: Atropelamento por caminhão (Truck-kun), encontro com deusa benevolente ou incompetente, habilidades roubadas (overpowered) e interface de menu flutuante.',
        equivalent: 'Convenção clássica de tropes de Light Novel (Truck-kun, Cheat Skills, Demon King)',
        bestScenario: 'Análise aprofundada de clichês estruturais e subversões de gênero (ex: Re:Zero, Mushoku Tensei, Konosuba).',
        dialogue: {
          speakerA: 'CRÍTICO_LIT',
          messageA: 'A história desconstrói o arquétipo ao não conceder nenhuma habilidade roubada ao herói.',
          speakerB: 'ESPECIALISTA',
          messageB: 'Essa é a assinatura dos isekais subversivos: o contraste brutal entre a expectativa e a realidade crua.',
          contextNote: 'Debate estilístico sobre a evolução do gênero nos últimos dez anos.'
        }
      }
    }
  },
  {
    terms: ['meteu essa', 'meteu essa?', 'meteu essa mesmo'],
    category: 'Cultura Urbana BR / Streams & Casimiro',
    syntacticRole: 'Locução verbal interrogativa/declarativa de espanto',
    origin: 'Gíria carioca amplamente difundida nacionalmente pelo streamer Casimiro Miguel em transmissões de react ao longo de 2021 e 2022.',
    formalityIndex: 1.8,
    formalityLevel: 'Coloquial Urbano / Rua & Streams',
    confidenceScore: '98.6%',
    translations: {
      en: {
        meaning: 'Did you really just say/do that? Expresses disbelief, mild challenge or mock indignation at someone audacity.',
        equivalent: 'You really just did that? / Did you really have the audacity? / Out of pocket!',
        bestScenario: 'Reação instantânea a comentários ousados, desculpas esfarrapadas ou audácia inesperada.',
        dialogue: {
          speakerA: 'DEV_JUNIOR',
          messageA: 'Eu commitei a chave de produção no GitHub público para adiantar o deploy de sexta.',
          speakerB: 'TECH_LEAD',
          messageB: 'Você meteu essa? Revoga os tokens em 30 segundos antes que o bot drene a conta.',
          contextNote: 'Incredulidade imediata perante um ato imprudente ou chocante.'
        }
      },
      es: {
        meaning: '¿En serio tuviste el descaro de decir o hacer eso? Cuestiona la audacia desmedida del interlocutor.',
        equivalent: '¿En serio hiciste eso? / ¿Te atreviste a tanto? / ¡Qué caradura!',
        bestScenario: 'Comentarios de reacción a declaraciones polémicas en transmisiones en vivo.',
        dialogue: {
          speakerA: 'COMENTARISTA_A',
          messageA: 'Afirmó en vivo que el delantero rival es superior a las tres leyendas del club.',
          speakerB: 'COMENTARISTA_B',
          messageB: '¿Meteu esa en serio? Se le va a venir toda la hinchada encima.',
          contextNote: 'Reacción de sorpresa ante una postura temeraria.'
        }
      },
      pt_formal: {
        meaning: 'Interpelação enfática que expressa ceticismo, perplexidade e interpelação crítica diante de um pronunciamento imprevisto ou arrojado.',
        equivalent: 'Presumiu mesmo tal assertiva? / Sustenta essa audácia argumentativa?',
        bestScenario: 'Tradução retórica em debates parlamentares ou peças de oratória argumentativa.',
        dialogue: {
          speakerA: 'ADVERSARIO_POLITICO',
          messageA: 'Os custos duplicaram em virtude de contingências meteorológicas incalculáveis.',
          speakerB: 'AUDITOR_CHEFE',
          messageB: 'O colega sustenta perante esta comissão semelhante alegação destituída de lastro probatório?',
          contextNote: 'Transposição da indignação coloquial para a elegância da réplica formal.'
        }
      },
      pt_neutro: {
        meaning: 'Você falou isso mesmo? Não acredito que você teve coragem de fazer/dizer isso.',
        equivalent: 'Você teve coragem mesmo? / Falou sério agora?',
        bestScenario: 'Interações espontâneas entre amigos quando alguém conta uma atitude fora do padrão.',
        dialogue: {
          speakerA: 'AMIGO_X',
          messageA: 'Cheguei para o gerente e perguntei se ele já pensou em se aposentar.',
          speakerB: 'AMIGO_Y',
          messageB: 'Você não teve coragem de falar isso na cara dele, teve?',
          contextNote: 'Surpresa afetuosa e cobrança amigável de limites.'
        }
      },
      pop_lore: {
        meaning: 'Momento em que o antagonista quebra a quarta parede ou faz uma exigência absurda desafiando as leis do universo narrativo.',
        equivalent: 'Quebra de decoro cósmico / Desafio insolente de roteiro',
        bestScenario: 'Fóruns de análise de roteiro onde um personagem toma uma atitude anti-clichê inesperada.',
        dialogue: {
          speakerA: 'MODERADOR_LORE',
          messageA: 'O Rei Demônio simplesmente ofereceu metade do reino e um contrato de CLT para o Herói.',
          speakerB: 'ASSINANTE_PRO',
          messageB: 'O autor meteu essa no meio da batalha final. Genialidade cômica.',
          contextNote: 'Destaque para a ruptura ousada de expectativas no enredo.'
        }
      }
    }
  },
  {
    terms: ['arretado', 'arretada', 'oxente', 'vixe'],
    category: 'Regionalismo / Nordeste Brasileiro',
    syntacticRole: 'Adjetivo polissêmico de intensidade máxima',
    origin: 'Expressão de raiz nordestina (principalmente Pernambuco, Ceará, Bahia, Paraíba). Variação sonora ligada a "correto", "irritado" ou "valente", assumindo sentido de excelente, formidável ou irritado dependendo da entonação.',
    formalityIndex: 3.5,
    formalityLevel: 'Coloquial Regional / Cultural',
    confidenceScore: '99.0%',
    translations: {
      en: {
        meaning: 'Extremely good, formidable, bad-ass, impressive, or occasionally furious/intense depending on context.',
        equivalent: 'Badass / Formidable / Outstanding / Fierce',
        bestScenario: 'Elogios enfáticos à competência profissional, feitos artísticos ou caráter indômito de alguém.',
        dialogue: {
          speakerA: 'ENGINEER_RECIFE',
          messageA: 'Finalizamos o pipeline de dados que reduziu a latência em 85%.',
          speakerB: 'DIRECTOR_GLOBAL',
          messageB: 'Que trabalho arretado da equipe! Superou todas as projeções da matriz.',
          contextNote: 'Elogio caloroso de alto prestígio e reconhecimento.'
        }
      },
      es: {
        meaning: 'Formidable, excelente, bravo o impresionante; denota vigor y maestría.',
        equivalent: 'Impresionante / Bárbaro / Bravo / Fuera de serie',
        bestScenario: 'Reconocimiento a desempeños extraordinarios y proyectos creativos de impacto.',
        dialogue: {
          speakerA: 'PROMOTOR_CULTURA',
          messageA: 'La orquesta sinfónica mezcló instrumentos de cuerda barrocos con percusión tradicional.',
          speakerB: 'CRITICO_ARTE',
          messageB: 'Fue una presentación arretada, llena de personalidad e identidad pura.',
          contextNote: 'Calificación laudatoria de excelencia artística regional.'
        }
      },
      pt_formal: {
        meaning: 'Qualidade ou indivíduo que denota notável arrojo, competência superlativa ou bravura perante adversidades.',
        equivalent: 'Excepcional / Formidável / Intrépido e resoluto.',
        bestScenario: 'Textos comemorativos, perfis biográficos ou crônicas literárias sobre figuras de destaque.',
        dialogue: {
          speakerA: 'BIOGRAFO',
          messageA: 'Como os registros da época descreviam a liderança de Maria Bonita?',
          speakerB: 'HISTORIADOR',
          messageB: 'Como uma figura de extraordinário destemor e liderança singular perante a dureza do sertão.',
          contextNote: 'Preservação da nobreza e peso histórico do termo.'
        }
      },
      pt_neutro: {
        meaning: 'Muito bom, impressionante, de alta qualidade ou muito corajoso.',
        equivalent: 'Excelente / Espetacular / Muito competente.',
        bestScenario: 'Conversas cotidianas ao elogiar uma comida, um lugar ou uma conquista de um colega.',
        dialogue: {
          speakerA: 'TURISTA',
          messageA: 'Experimentou aquele prato típico no restaurante do centro?',
          speakerB: 'GUIA',
          messageB: 'Experimentei ontem, comida arretada demais, não dá vontade de parar.',
          contextNote: 'Apreciação de alta qualidade e prazer sensorial.'
        }
      },
      pop_lore: {
        meaning: 'Arquétipo do guerreiro sertanejo com bônus de resistência e determinação inabalável no folclore e RPGs nacionais.',
        equivalent: 'Buff de bravura sertaneja / Classe Cangaceiro lendário',
        bestScenario: 'Criação de cenários de fantasia regional brasileira em RPG de mesa (ex: Tormenta, A Bandeira do Elefante).',
        dialogue: {
          speakerA: 'MESTRE_RPG',
          messageA: 'O capitão das milícias enfrenta sozinho o bando de espectros na caatinga.',
          speakerB: 'JOGADOR',
          messageB: 'Ele ativa a postura de combatente arretado e não recua um palmo de terreno.',
          contextNote: 'Invoca o espírito épico de resistência heróica.'
        }
      }
    }
  },
  {
    terms: ['poggers', 'pog', 'pogchamp'],
    category: 'Gamer Global / Twitch & Emote Culture',
    syntacticRole: 'Interjeição de empolgação e triunfo',
    origin: 'Cultura de emotes da Twitch originada a partir da expressão facial de choque do jogador Ryan Gutierrez (Gootecks) em 2011; posteriormente transformada no Pepe the Frog "Poggers" no canal Discord/Twitch.',
    formalityIndex: 1.2,
    formalityLevel: 'Gíria Marginal / Gamer & Streaming',
    confidenceScore: '99.1%',
    translations: {
      en: {
        meaning: 'Expression of intense excitement, celebration, victory, or awe at an incredible play or news.',
        equivalent: 'Awesome! / Incredible hype! / Lets go!',
        bestScenario: 'Comemorações imediatas em chats de jogos multijogador, canais de streaming e Discord.',
        dialogue: {
          speakerA: 'STREAM_MOD',
          messageA: 'The host just won a 1v5 clutch with 2 HP left on the clock.',
          speakerB: 'CHAT_FEED',
          messageB: 'Poggers everywhere, that was the play of the year!',
          contextNote: 'Clímax coletivo de entusiasmo comunitário.'
        }
      },
      es: {
        meaning: 'Exclamación de entusiasmo puro ante una jugada maestra o un logro inesperado.',
        equivalent: '¡Qué locura! / ¡Increíble! / ¡Épico total!',
        bestScenario: 'Directos de torneos de esports, victorias en torneos de fin de semana.',
        dialogue: {
          speakerA: 'CASTER_LATAM',
          messageA: 'Acaba de robar el objetivo mayor sin visión y sin ayuda.',
          speakerB: 'ANALISTA_ESPORTS',
          messageB: '¡Poggers total en el chat! Una jugada que pasará a los anales de la liga.',
          contextNote: 'Celebración desbordada de un hito competitivo.'
        }
      },
      pt_formal: {
        meaning: 'Manifestação exclamativa de júbilo e exaltação perante um evento de extraordinária perícia ou êxito surpreendente.',
        equivalent: 'Vitória memorável / Façanha digna de aclamação.',
        bestScenario: 'Análise de engajamento de audiência e métricas de euforia em eventos digitais ao vivo.',
        dialogue: {
          speakerA: 'DIRETOR_TRANSMISSAO',
          messageA: 'Qual foi o pico de interação do público durante o torneio?',
          speakerB: 'ENGENHEIRO_TELEMETRIA',
          messageB: 'Registramos a saturação máxima no instante da virada, acompanhada por aclamação unânime.',
          contextNote: 'Conversão técnica do fenômeno de hype coletivo.'
        }
      },
      pt_neutro: {
        meaning: 'Sensacional, vitória incrível, motivo de comemoração imediata.',
        equivalent: 'Massa demais! / Que vitória! / Mandou muito bem!',
        bestScenario: 'Parabenizar um colega por uma conquista técnica ou encerramento de um desafio difícil.',
        dialogue: {
          speakerA: 'DEV_OPS',
          messageA: 'Conseguimos migrar os 40 terabytes de dados sem nenhuma perda de pacote e 2 horas antes do previsto.',
          speakerB: 'SCRUM_MASTER',
          messageB: 'Sensacional demais! Vamos comemorar que esse resultado foi histórico.',
          contextNote: 'Celebração de êxito coletivo com entusiasmo.'
        }
      },
      pop_lore: {
        meaning: 'Efeito crítico visual onde a plateia do Coliseu de batalha atinge o ápice de êxtase ao testemunhar um combo lendário.',
        equivalent: 'Reação de plateia eufórica / Clímax de arena',
        bestScenario: 'Descrições de cenas de torneios em Light Novels com plateia numerosa.',
        dialogue: {
          speakerA: 'COMENTARISTA_ARENA',
          messageA: 'A espada elemental atingiu o núcleo do dragão mecânico.',
          speakerB: 'NARRADOR_EPICO',
          messageB: 'A arquibancada inteira foi ao delírio coletivo; uma cena digna de memória perpétua.',
          contextNote: 'Impacto dramático da vitória diante de espectadores.'
        }
      }
    }
  },
  {
    terms: ['foi de vasco', 'de vasco', 'foi pro vasco', 'jogar no vasco'],
    category: 'Internet BR / Futebol & Cultura de Memes',
    syntacticRole: 'Eufemismo idiomático humorístico para óbito ou descarte',
    origin: 'Piada recorrente da internet brasileira associando o Club de Regatas Vasco da Gama à ideia de "contratar" personalidades falecidas ou dispositivos que queimaram irreversivelmente.',
    formalityIndex: 1.0,
    formalityLevel: 'Gíria Marginal / Humor Negro & Memes',
    confidenceScore: '99.4%',
    translations: {
      en: {
        meaning: 'Humorous Brazilian euphemism indicating that something died, broke permanently, crashed, or ceased to exist.',
        equivalent: 'Bit the dust / Met its demise / Blue-screened for good / Perished',
        bestScenario: 'Referir-se a hardware danificado, projetos cancelados ou falhas fatais em sistemas.',
        dialogue: {
          speakerA: 'HARDWARE_TECH',
          messageA: 'O switch do rack 04 não responde mais aos pings e o LED está vermelho contínuo.',
          speakerB: 'SYS_ADMIN',
          messageB: 'Cheiro de queimado no capacitor. Foi de Vasco, abre o chamado para substituição.',
          contextNote: 'Diagnóstico irreverente de perda total de equipamento.'
        }
      },
      es: {
        meaning: 'Eufemismo humorístico brasileño para indicar que algo pereció, se averió irreparablemente o dejó de funcionar.',
        equivalent: 'Pasó a mejor vida / Se fue al tacho / Murió sin retorno',
        bestScenario: 'Comentarios informales sobre componentes electrónicos descompuestos o ideas descartadas.',
        dialogue: {
          speakerA: 'OPERADOR_MAQUINA',
          messageA: 'La bomba hidráulica secundaria se detuvo con ruido metálico.',
          speakerB: 'MECANICO_JEFE',
          messageB: 'Ese motor pasó a mejor vida, no tiene salvación.',
          contextNote: 'Aceptación pragmática y descontracturada de daño irreparable.'
        }
      },
      pt_formal: {
        meaning: 'Expressão eufemística de teor burlesco para descrever a cessação definitiva de funcionamento, obsolescência terminal ou falecimento.',
        equivalent: 'Avariou-se de forma irreversível / Sucumbiu / Teve suas funções extintas.',
        bestScenario: 'Peritagens patrimoniais que necessitam converter o jargão popular em laudo de baixa patrimonial.',
        dialogue: {
          speakerA: 'PERITO_CONTABIL',
          messageA: 'Qual a situação contábil do servidor físico desativado?',
          speakerB: 'GESTOR_PATRIMONIO',
          messageB: 'O ativo sofreu colapso de componentes vitais e foi classificado para descarte definitivo.',
          contextNote: 'Adequação estrita a normas de auditoria e contabilidade pública.'
        }
      },
      pt_neutro: {
        meaning: 'Estragou de vez, não tem mais conserto, parou de funcionar completamente.',
        equivalent: 'Pifou de vez / Quebrou sem conserto / Chegou ao fim da vida útil.',
        bestScenario: 'Situações corriqueiras de quebra de eletrodomésticos, celulares ou peças de computador.',
        dialogue: {
          speakerA: 'AMIGO_1',
          messageA: 'Você conseguiu recuperar os arquivos do disco rígido antigo?',
          speakerB: 'AMIGO_2',
          messageB: 'Levei na assistência e o técnico disse que pifou de vez, já era.',
          contextNote: 'Comunicação direta sobre impossibilidade de recuperação.'
        }
      },
      pop_lore: {
        meaning: 'Transferência forçada de um personagem derrotado para a dimensão dos espíritos caídos (o plano espectral).',
        equivalent: 'Banimento para o reino das sombras / Baixa em combate sem reviver',
        bestScenario: 'Comentários sobre mortes definitivas de personagens em arcos brutais de mangás (ex: Chainsaw Man, Jujutsu Kaisen).',
        dialogue: {
          speakerA: 'THEORIST_MANGA',
          messageA: 'Será que o mentor tem chance de voltar no próximo capítulo após o golpe?',
          speakerB: 'COMENTARISTA',
          messageB: 'Sem chance de cura reversa, ele foi de Vasco com certeza.',
          contextNote: 'Juízo definitivo de encerramento de arco de personagem.'
        }
      }
    }
  },
  {
    terms: ['pegou a visao', 'pega a visao', 'pega a visão', 'pegou a visão'],
    category: 'Cultura Urbana BR / Periferia & Rap',
    syntacticRole: 'Expressão idiomática de assimilação cognitiva',
    origin: 'Expressão originada nas comunidades periféricas brasileiras (fortemente presente no Rio de Janeiro e São Paulo), consagrada nas letras de rap, funk e trap nacional.',
    formalityIndex: 1.9,
    formalityLevel: 'Coloquial Urbano / Rua',
    confidenceScore: '99.3%',
    translations: {
      en: {
        meaning: 'Did you understand the concept? Did you grasp the real insight or deeper wisdom I just shared?',
        equivalent: 'Did you get the picture? / Catch my drift? / Read the room and take notes',
        bestScenario: 'Passar uma lição prática de vida, estratégia de negócios de rua ou instrução técnica perspicaz.',
        dialogue: {
          speakerA: 'ARQUITETO_SR',
          messageA: 'Não crie abstração antes de ter três repetições de código idênticas. Pega a visão.',
          speakerB: 'DEV_PLENO',
          messageB: 'Peguei a visão total. DRY prematuro só gera dor de cabeça.',
          contextNote: 'Transmissão direta de sabedoria prática e alinhamento de raciocínio.'
        }
      },
      es: {
        meaning: '¿Entendiste la idea de fondo? Capta el sentido real de lo que te acabo de explicar.',
        equivalent: '¿Captaste la onda? / ¿Entendiste la jugada? / Date cuenta de la realidad',
        bestScenario: 'Consejos de mentores a aprendices en contextos dinámicos y de alto rendimiento.',
        dialogue: {
          speakerA: 'MENTOR_STARTUP',
          messageA: 'El cliente no compra tecnología, compra tranquilidad operativa. Pega la visión.',
          speakerB: 'FUNDADOR_JR',
          messageB: 'Totalmente entendido, voy a reestructurar la propuesta comercial.',
          contextNote: 'Epifanía guiada por consejo certero.'
        }
      },
      pt_formal: {
        meaning: 'Apreender a conjuntura essencial; compreender a perspectiva estratégica implícita na diretriz comunicada.',
        equivalent: 'Compreendeu o prisma analítico? / Assimilou a premissa fundamental?',
        bestScenario: 'Reuniões de diretoria e briefings estratégicos de alta liderança.',
        dialogue: {
          speakerA: 'CHIEF_STRATEGY',
          messageA: 'A nossa diferenciação futura dependerá exclusivamente da soberania dos dados proprietários.',
          speakerB: 'C_LEVEL',
          messageB: 'O colegiado assimilou com precisão o vetor estratégico e apoia a resolução.',
          contextNote: 'Conversão em alinhamento de visão corporativa de alto escalão.'
        }
      },
      pt_neutro: {
        meaning: 'Entendeu o raciocínio? Conseguiu perceber como as coisas funcionam na prática?',
        equivalent: 'Entendeu a ideia? / Ficou claro o ponto?',
        bestScenario: 'Explicações entre colegas de equipe ao ensinar um macete de processo ou ferramenta.',
        dialogue: {
          speakerA: 'INSTRUTOR',
          messageA: 'Se você usar esse atalho, economiza 15 cliques em cada formulário. Entendeu como funciona?',
          speakerB: 'ALUNO',
          messageB: 'Nossa, bem melhor. Entendi certinho, valeu pela dica.',
          contextNote: 'Confirmação mútua de aprendizado prático.'
        }
      },
      pop_lore: {
        meaning: 'Momento de iluminação tática em que o estrategista antecipa o plano do adversário cinco jogadas à frente.',
        equivalent: 'Clarividência tática / Despertar da percepção ampliada',
        bestScenario: 'Análise de personagens arquétipos de intelecto superior (ex: Shikamaru, Lelouch, L).',
        dialogue: {
          speakerA: 'ESTRATEGISTA',
          messageA: 'Ele posicionou a cavalaria ali propositalmente para simular fraqueza.',
          speakerB: 'GENERAL',
          messageB: 'O comandante pegou a visão da armadilha e mudou a formação a tempo.',
          contextNote: 'Reconhecimento de leitura sagaz do campo de batalha.'
        }
      }
    }
  },
  {
    terms: ['tsundere'],
    category: 'Anime / Tropos de Personagem em Light Novels',
    syntacticRole: 'Adjetivo e substantivo japonês (tsun-tsun + dere-dere)',
    origin: 'Termo cunhado na subcultura otaku japonesa dos anos 2000. Descreve personalidades inicialmente hostis, rudes ou defensivas que gradualmente revelam um lado doce, afetuoso e leal.',
    formalityIndex: 3.8,
    formalityLevel: 'Casual / Crítica Literária de Mangás',
    confidenceScore: '99.7%',
    translations: {
      en: {
        meaning: 'Character archetype that is initially cold, harsh, or volatile on the outside, but harbors deep affectionate feelings on the inside.',
        equivalent: 'Cold on the outside, soft on the inside / Reluctant softie',
        bestScenario: 'Críticas de romances, perfis de personagens em jogos gacha e debates de narratologia.',
        dialogue: {
          speakerA: 'ANIME_REVIEWER',
          messageA: 'She spent three chapters insulting his swordsmanship, then secretly forged him an enchanted ring.',
          speakerB: 'CO_HOST',
          messageB: 'Peak Tsundere behavior. She would rather perish than admit she cares.',
          contextNote: 'Identificação clássica do conflito entre orgulho externo e afeto interno.'
        }
      },
      es: {
        meaning: 'Arquetipo de personaje con una coraza de hostilidad y orgullo que esconde vulnerabilidad y devoción amorosa.',
        equivalent: 'Dura por fuera, tierna por dentro / Orgullosa cariñosa',
        bestScenario: 'Reseñas de series de animación y mangas románticos.',
        dialogue: {
          speakerA: 'LECTOR_MANGA',
          messageA: 'Dijo que preparó el almuerzo solo porque le sobró comida, no para complacerlo.',
          speakerB: 'AMIGA_LECTORA',
          messageB: 'La típica actitud tsundere de manual que todo el mundo reconoce al instante.',
          contextNote: 'Mecanismo de defensa cómico ante sentimientos descubiertos.'
        }
      },
      pt_formal: {
        meaning: 'Padrão arquetípico de ambivalência comportamental, no qual uma fachada de agressividade e distanciamento mascara sentimentos latentes de vulnerabilidade e afeto.',
        equivalent: 'Comportamento defensivo-reativo com afeto dissimulado.',
        bestScenario: 'Ensaios sobre psicologia de personagens na dramaturgia ficcional oriental contemporânea.',
        dialogue: {
          speakerA: 'PSICOLOGO_ARTE',
          messageA: 'Como a dramaturgia popular codifica o medo da rejeição afetiva na juventude?',
          speakerB: 'CRITICO_CULTURAL',
          messageB: 'Mediante a figuração tsundere, polarizando a recusa manifesta e a dedicação íntima.',
          contextNote: 'Tratamento conceitual acadêmico do tropo literário.'
        }
      },
      pt_neutro: {
        meaning: 'Pessoa que finge que não se importa e é até meio brava por fora, mas no fundo é muito carinhosa e protetora.',
        equivalent: 'Durão por fora, coração mole por dentro / Marrento carinhoso.',
        bestScenario: 'Comentários entre amigos sobre pessoas queridas que têm pose de duronas mas ajudam todo mundo.',
        dialogue: {
          speakerA: 'FILHO',
          messageA: 'Meu pai reclamou meia hora que não queria outro cachorro em casa.',
          speakerB: 'IRMA',
          messageB: 'E agora está dormindo no sofá com o cachorrinho no colo coberto com o cobertor dele.',
          contextNote: 'Exemplo prático de aparente aspereza desfeita pelo afeto real.'
        }
      },
      pop_lore: {
        meaning: 'A Santíssima Trindade Tsundere das dublagens japonesas da década de 2000 (Rie Kugimiya: Taiga Aisaka, Shana, Louise Françoise). Frase clássica: "B-Baka! Não é como se eu me importasse com você!".',
        equivalent: 'Arquétipo da Rainha Tsundere clássica',
        bestScenario: 'Enciclopédias e wikis de tropes de anime (TV Tropes).',
        dialogue: {
          speakerA: 'HISTORIADOR_OTAKU',
          messageA: 'Qual papel consolidou o auge da era dourada do tropo em 2008?',
          speakerB: 'CURADOR_ARCHIVE',
          messageB: 'Toradora e a performance lendária de Taiga Aisaka definiram a régua da indústria.',
          contextNote: 'Marco histórico de consolidação do tropo na cultura pop global.'
        }
      }
    }
  },
  {
    terms: ['cap', 'no cap', 'sem cap'],
    category: 'Slang Global / Hip-Hop & Geração Z Americana',
    syntacticRole: 'Substantivo e locução adjetiva de veracidade',
    origin: 'Gíria da cultura hip-hop de Atlanta (EUA), associada a "capping" (mentir, fingir). "No cap" popularizou-se em canções de trap (Young Thug, Future) e virou padrão na internet global.',
    formalityIndex: 1.4,
    formalityLevel: 'Gíria Marginal / Streetwear & Trap',
    confidenceScore: '98.5%',
    translations: {
      en: {
        meaning: '"Cap" means a lie or exaggeration; "No cap" affirms that what was said is 100% genuine truth with zero fabrications.',
        equivalent: 'No lie / For real / Absolutely factual / Zero hype',
        bestScenario: 'Reafirmação enfática de veracidade em redes sociais e conversas sobre feitos reais.',
        dialogue: {
          speakerA: 'TRAP_PRODUCER',
          messageA: 'Did you really record that entire vocal track in a single take?',
          speakerB: 'ARTIST',
          messageB: 'One take, no autotune, no cap. The engineer has the raw session file.',
          contextNote: 'Garantia incontestável de legitimidade de um feito extraordinário.'
        }
      },
      es: {
        meaning: '"Cap" significa mentira; "No cap" asegura que la declaración es completamente verídica y sin inventos.',
        equivalent: 'Sin mentira / De verdad pura / Cero falsedad',
        bestScenario: 'Discusiones juveniles sobre autenticidad de logros o noticias.',
        dialogue: {
          speakerA: 'STREAMER_ES',
          messageA: '¿Completaste el juego en modo pesadilla sin recibir ningún golpe?',
          speakerB: 'SPEEDRUNNER',
          messageB: 'No cap, todo transmitido en vivo con la cámara apuntando al mando.',
          contextNote: 'Afirmación de honestidad competitiva irrefutable.'
        }
      },
      pt_formal: {
        meaning: 'Declaração asseverativa de fidedignidade, desprovida de artifícios hiperbólicos ou falsificações deliberadas.',
        equivalent: 'Comprovação fatídica irrepreensível / Verdade atestada.',
        bestScenario: 'Comparações lexicográficas em artigos sobre influências da cultura musical urbana na linguagem cotidiana.',
        dialogue: {
          speakerA: 'LEXICOGRAFO',
          messageA: 'Como o vernáculo contemporâneo suprime a necessidade de juramentos tradicionais?',
          speakerB: 'PESQUISADOR_SOCIOLING',
          messageB: 'Valendo-se de marcadores fáticos de veracidade binária como cap versus no cap.',
          contextNote: 'Tratamento técnico do fenômeno fático contemporâneo.'
        }
      },
      pt_neutro: {
        meaning: 'Sem mentira, falando a pura verdade, sem inventar história nenhuma.',
        equivalent: 'Sem caô / É verdade pura / Falando muito sério.',
        bestScenario: 'Contar uma história quase inacreditável para os amigos garantindo que é real.',
        dialogue: {
          speakerA: 'AMIGO_A',
          messageA: 'Você viu a celebridade na padaria da esquina mesmo?',
          speakerB: 'AMIGO_B',
          messageB: 'Eu tirei foto com ela, sem caô nenhum, ela estava comprando pão de queijo.',
          contextNote: 'Confirmação direta e descontraída de que o fato é autêntico.'
        }
      },
      pop_lore: {
        meaning: 'Pacto de sangue de guilda: garantia mística de que a recompensa da missão é verídica e não se trata de uma armadilha armada pela guilda das sombras.',
        equivalent: 'Selo de veracidade do contrato de aventureiro',
        bestScenario: 'Descrições de contratos em cidades mercantis de mundos de fantasia.',
        dialogue: {
          speakerA: 'LADINO',
          messageA: 'O conde realmente pagará mil moedas de platina pelo artefato?',
          speakerB: 'MESTRE_GUILDA',
          messageB: 'O contrato traz o selo régio inquebrável: sem mentira, recompensa garantida.',
          contextNote: 'Adaptação temática da confirmação de valor legítimo em narrativa de aventura.'
        }
      }
    }
  },
  {
    terms: ['de cria', 'cria'],
    category: 'Cultura Urbana BR / Favelas do Rio & Trap Nacional',
    syntacticRole: 'Locução adjetiva e substantivo identitário',
    origin: 'Originado nas favelas e subúrbios do Rio de Janeiro. Refere-se a quem nasceu e foi forjado naquela comunidade, possuindo códigos próprios de lealdade, estilo e respeito.',
    formalityIndex: 1.1,
    formalityLevel: 'Gíria Marginal / Periferia & Autenticidade',
    confidenceScore: '99.6%',
    translations: {
      en: {
        meaning: 'Authentic local product; born and bred in the community with undeniable street cred and distinctive regional style.',
        equivalent: 'Born and raised local / Street cred authentic / Real hood native',
        bestScenario: 'Identificação de raízes comunitárias, estilo de se vestir, fidelidade a amigos da infância.',
        dialogue: {
          speakerA: 'PRODUTOR_CLIPE',
          messageA: 'A direção de arte quer contratar figurantes para o clipe de rap.',
          speakerB: 'DIRETOR_LOCAL',
          messageB: 'Nada de figurante com pose forçada. A rapaziada do clipe tem que ser de cria da área.',
          contextNote: 'Exigência de legitimidade estética e cultural.'
        }
      },
      es: {
        meaning: 'Originario y criado en el barrio popular; posee legitimidad y pertenencia real al territorio.',
        equivalent: 'Genuino del barrio / De pura cepa popular / Criado en la calle',
        bestScenario: 'Relatos de identidad comunitaria y música urbana.',
        dialogue: {
          speakerA: 'PERIODISTA_MUSICAL',
          messageA: '¿Cuál es el secreto de la conexión del cantante con el público del concierto?',
          speakerB: 'REPRESENTANTE',
          messageB: 'El público sabe que él es de cria, nunca olvidó de dónde salió.',
          contextNote: 'Identificación indiscutible entre el artista y su comunidad natal.'
        }
      },
      pt_formal: {
        meaning: 'Indivíduo natural e aculturado em determinado reduto comunitário periférico, portador de legitimidade identitária e capital social endógeno.',
        equivalent: 'Autêntico expoente comunitário / Legítimo autóctone.',
        bestScenario: 'Estudos etnográficos urbanos, antropologia visual e análise sociológica do território.',
        dialogue: {
          speakerA: 'ANTROPOLOGO_URBANO',
          messageA: 'Qual elemento confere autoridade discursiva aos líderes juvenis do bairro?',
          speakerB: 'PESQUISADOR_CAMPO',
          messageB: 'O reconhecimento compartilhado de sua trajetória orgânica enraizada no próprio território.',
          contextNote: 'Elaboração acadêmica do conceito de pertencimento territorial periférico.'
        }
      },
      pt_neutro: {
        meaning: 'Pessoa que nasceu e cresceu no bairro, que conhece todo mundo e é muito respeitada pelas suas raízes.',
        equivalent: 'Nascido e criado aqui / Da raiz do bairro / Prata da casa.',
        bestScenario: 'Conversas cotidianas apresentando alguém antigo e respeitado na vizinhança.',
        dialogue: {
          speakerA: 'MORADOR_NOVO',
          messageA: 'Quem é aquele comerciante que conhece todo mundo que passa na calçada?',
          speakerB: 'MORADOR_ANTIGO',
          messageB: 'Aquele é nascido e criado aqui, mora no bairro há 40 anos e todo mundo confia.',
          contextNote: 'Apresentação afetuosa de pertencimento comunitário secular.'
        }
      },
      pop_lore: {
        meaning: 'Guerreiro forjado nas forjas subterrâneas de uma cidadela anã ou nas guildas das docas, fiel até a morte ao seu clã de origem.',
        equivalent: 'Filho orgulhoso das forjas nativas / Clã leal das raízes',
        bestScenario: 'Fichas de personagens de RPG de heróis que defendem seu bairro natal contra guildas invasoras.',
        dialogue: {
          speakerA: 'CONSELHEIRO_GUILDA',
          messageA: 'Os mercenários de fora estão tentando comprar a lealdade dos patrulheiros.',
          speakerB: 'CAPITAO_PORTAO',
          messageB: 'Os patrulheiros são de cria das docas. Ouro nenhum compra quem honra o próprio chão.',
          contextNote: 'Destaque para o valor inegociável da lealdade ao solo nativo.'
        }
      }
    }
  }
];

// Target languages available in the application
export const SUPPORTED_TARGETS = [
  { id: 'en', label: 'Inglês (Contextual / Idiom)', code: 'EN-US', badge: 'EN' },
  { id: 'es', label: 'Espanhol (Latam / Coloquial)', code: 'ES-ES', badge: 'ES' },
  { id: 'pt_formal', label: 'Português Formal (Culto / Corporativo)', code: 'PT-BR [HIGH]', badge: 'PT-C' },
  { id: 'pt_neutro', label: 'Português Neutro (Coloquial Padrão)', code: 'PT-BR [STD]', badge: 'PT-N' },
  { id: 'pop_lore', label: 'Análise de Lore / Cultura Pop & Light Novel', code: 'LORE-ANIME', badge: 'LORE' },
];

/**
 * Normalizes an input string for comparison (removes diacritics, lowercase, trims punctuation)
 */
function normalizeQuery(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[?!.,;:_~^"'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Smart Fallback Engine: If the user enters an arbitrary word or phrase not in the database,
 * this function parses syntactic parts, generates dynamic believable linguistic metrics,
 * and builds a contextually structured report so the experience is never broken.
 */
function generateDynamicAnalysis(rawInput, targetLangId) {
  const cleanInput = rawInput.trim();
  const wordCount = cleanInput.split(/\s+/).length;
  const hash = Array.from(cleanInput).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Deterministic but realistic formality index based on length & character entropy
  const baseFormality = ((hash % 45) + 10) / 10; // Between 1.0 and 5.5
  
  let formalityLevel = 'Coloquial Urbano / Rua';
  if (baseFormality < 2.0) formalityLevel = 'Gíria Marginal / Informal Extremo';
  else if (baseFormality < 3.5) formalityLevel = 'Coloquial Urbano / Redes Sociais';
  else if (baseFormality < 5.0) formalityLevel = 'Casual / Internet & Grupos';
  else formalityLevel = 'Semi-informal / Amplo';

  const category = wordCount > 2 ? 'Expressão Idiomática / Construção Cultural' : 'Jargão Emergente / Gíria Contemporânea';
  const syntacticRole = wordCount === 1 ? 'Termo de gíria (Substantivo/Adjetivo contextual)' : 'Locução frasal de ênfase dialetal';

  // Target specific translations
  const targetTranslations = {
    en: {
      meaning: `Contextual sociolect meaning indicating an informal emphasis on "${cleanInput}", used to stress intention, tone, or emotional alignment between peers.`,
      equivalent: `Informal equivalent: "${cleanInput}" (localized slang context)`,
      bestScenario: 'Conversas descontraídas entre grupos de convivência, bate-papos virtuais e postagens em redes sociais.',
      dialogue: {
        speakerA: 'SISTEMA_DEV_01',
        messageA: `Você ouviu quando mencionaram '${cleanInput}' no canal geral?`,
        speakerB: 'SISTEMA_DEV_02',
        messageB: `Sim, o contexto era totalmente informal para alinhar expectativas com a equipe sem burocracia.`,
        contextNote: 'Uso espontâneo demonstrando proximidade e sincronia comunicativa.'
      }
    },
    es: {
      meaning: `Expresión vernácula con carga enfática sobre "${cleanInput}", orientada a conectar afectivamente con el receptor en contextos distendidos.`,
      equivalent: `Traducción funcional al español contextual: expresión coloquial equivalente a "${cleanInput}".`,
      bestScenario: 'Comunidades en línea, grupos de mensajería y ambientes de camaradería.',
      dialogue: {
        speakerA: 'OPERADOR_SUR',
        messageA: `El equipo usó la frase '${cleanInput}' para resumir la jornada.`,
        speakerB: 'OPERADOR_NORTE',
        messageB: `Quedó clarísimo el sentido de camaradería y resolución práctica del grupo.`,
        contextNote: 'Transmisión de cercanía afectiva sin rigidez formal.'
      }
    },
    pt_formal: {
      meaning: `Construção semântica não padronizada que expressa, por via de síntese coloquial, o conceito associado a "${cleanInput}".`,
      equivalent: `Transposição formal: "Manifestação indicativa de ${cleanInput} sob perspectiva contextualizada."`,
      bestScenario: 'Adequada para transcrições em laudos sociolinguísticos, atas descritivas ou estudos de variação diafásica.',
      dialogue: {
        speakerA: 'REVISOR_TECNICO',
        messageA: `Como devemos registrar o vocábulo '${cleanInput}' na documentação oficial?`,
        speakerB: 'CONSULTOR_LINGUISTICO',
        messageB: `Recomenda-se registrar como variação dialetal contemporânea de registro informal estrito.`,
        contextNote: 'Enquadramento metodológico da linguagem corrente sob normas cultas.'
      }
    },
    pt_neutro: {
      meaning: `Forma popular e direta de expressar o sentimento ou atitude ligada a "${cleanInput}" sem complicação.`,
      equivalent: `Significado direto: uma forma rápida de dizer o que se pensa com foco em "${cleanInput}".`,
      bestScenario: 'Conversas do dia a dia, almoços de trabalho e grupos informais com colegas.',
      dialogue: {
        speakerA: 'INTERLOCUTOR_1',
        messageA: `Quando ele falou '${cleanInput}', todo mundo na sala concordou na hora.`,
        speakerB: 'INTERLOCUTOR_2',
        messageB: `Ficou fácil de entender o recado sem precisar de rodeios.`,
        contextNote: 'Comunicação assertiva e sem barreiras.'
      }
    },
    pop_lore: {
      meaning: `Subversão ou mantra de personagem dentro de um universo narrativo que expressa a filosofia pessoal de "${cleanInput}".`,
      equivalent: `Mote dramático / Tropo de personagem centrado em: ${cleanInput}`,
      bestScenario: 'Ficção especulativa, Light Novels, mangás e mesas de RPG narrativo.',
      dialogue: {
        speakerA: 'NARRADOR_GUILDA',
        messageA: `Antes de desembainhar a lâmina, ele sussurrou o mantra '${cleanInput}'.`,
        speakerB: 'AVENTUREIRO_ELITE',
        messageB: 'Aquele era o gatilho psicológico para ativar sua técnica de concentração máxima.',
        contextNote: 'Ressonância emocional do termo como vetor de caracterização épica.'
      }
    }
  };

  const selectedData = targetTranslations[targetLangId] || targetTranslations['en'];

  return {
    query: cleanInput,
    targetLanguage: SUPPORTED_TARGETS.find(t => t.id === targetLangId) || SUPPORTED_TARGETS[0],
    category,
    syntacticRole,
    origin: `Termo identificado por inferência léxica no corpus contemporâneo. Apresenta traços de dialeto urbano e difusão em mídias digitais conectadas.`,
    formalityIndex: baseFormality,
    formalityLevel,
    confidenceScore: `${((hash % 12) + 87).toFixed(1)}%`,
    tokensAnalyzed: wordCount,
    timestamp: new Date().toISOString(),
    meaning: selectedData.meaning,
    equivalent: selectedData.equivalent,
    bestScenario: selectedData.bestScenario,
    dialogue: selectedData.dialogue
  };
}

/**
 * Main API simulation function
 * Resolves the query against the database or falls back to smart linguistic engine.
 * Employs a simulated latency of 1300-1600ms for realistic terminal processing.
 */
export async function decodeSlang(rawInput, targetLangId = 'en') {
  const normalized = normalizeQuery(rawInput);
  
  // Simulated processing delay
  await new Promise(resolve => setTimeout(resolve, 1400));

  if (!normalized) {
    throw new Error('ENTRADA_INVALIDA: O terminal requer uma sequência de caracteres não vazia para análise.');
  }

  // Look for match in curated database
  const match = SLANG_DATABASE.find(item => {
    return item.terms.some(t => {
      const normTerm = normalizeQuery(t);
      return normalized === normTerm || normalized.includes(normTerm) || normTerm.includes(normalized);
    });
  });

  if (match) {
    const langKey = targetLangId in match.translations ? targetLangId : 'en';
    const translationData = match.translations[langKey];
    const targetObj = SUPPORTED_TARGETS.find(t => t.id === targetLangId) || SUPPORTED_TARGETS[0];

    return {
      query: rawInput.trim(),
      targetLanguage: targetObj,
      category: match.category,
      syntacticRole: match.syntacticRole,
      origin: match.origin,
      formalityIndex: match.formalityIndex,
      formalityLevel: match.formalityLevel,
      confidenceScore: match.confidenceScore,
      tokensAnalyzed: rawInput.trim().split(/\s+/).length,
      timestamp: new Date().toISOString(),
      meaning: translationData.meaning,
      equivalent: translationData.equivalent,
      bestScenario: translationData.bestScenario,
      dialogue: translationData.dialogue
    };
  }

  // Fallback to dynamic linguistic parser
  return generateDynamicAnalysis(rawInput, targetLangId);
}

