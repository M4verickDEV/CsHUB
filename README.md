Customer Service Hub (Copiloto "Star")

Este projeto é um protótipo de front-end de alta fidelidade para uma plataforma moderna de atendimento ao cliente (Customer Service). Ele foi desenhado como um "Copiloto" para o operador, utilizando a IA "Star" para aumentar a eficiência, empatia e qualidade do atendimento.

A aplicação inclui uma interface de agente completa, um dashboard de gestão (wallboard) e simula um ambiente omnichannel (Web, WhatsApp, Instagram) com funcionalidades avançadas como chamadas de áudio, transcrição ao vivo e coaching por IA.

✨ Funcionalidades Principais

Este protótipo simula visualmente as seguintes funcionalidades:

Para o Operador

Login Seguro: Ecrã de entrada para o operador.

Layout Flexível: Painéis laterais (Fila e Contexto) totalmente redimensionáveis com o rato.

Fila Omnichannel: Visualiza chats do site, WhatsApp e Instagram num só lugar.

Gestão de Presença: Cronómetro de tempo online com botão de pausa.

Chat Avançado:

Envio de mensagens de texto.

Anexo de Ficheiros (clicando ou arrastando e largando).

Filtro de Linguagem: Bloqueia o envio de palavras inapropriadas.

Comunicação Unificada:

Início de chamadas de Áudio e Vídeo.

Co-browsing (navegação partilhada) com o cliente.

Menus de Controlo:

Menu de Perfil: Acesso a Perfil, Agenda, Treinamentos, Meetings, etc.

Menu de Configurações: Alternância de tema (Dark/Light) e outras opções.

Transferência de Chamados: Botão para encaminhar o atendimento para outra área ou operador.

Copiloto IA "Star"

Base de Conhecimento Própria (Grounding): A "Star" baseia as suas sugestões não só na internet, mas em documentos carregados pela empresa (políticas, leis, manuais, regras de negócio).

Triagem Automática: O cliente é recebido por um bot que recolhe informações iniciais (Problema, Pedido, etc.).

Análise de Sentimento: Mostra o sentimento do cliente (ex: Frustrado 😠) em tempo real.

Sugestões Inteligentes: A "Star" sugere respostas rápidas com base na conversa.

Transcrição de Áudio ao Vivo: Durante uma chamada de áudio, a "Star" transcreve a conversa em tempo real.

"Star" Ouve a Chamada: A IA analisa a transcrição de áudio e fornece sugestões contextuais.

Coaching em Tempo Real:

Pop-up Suave: A "Star" envia dicas ao operador (ex: "Excelente uso de empatia!") ou avisos (ex: "Tom negativo detetado. Contacte o supervisor.").

Bloqueio de Linguagem: Avisa o operador se o filtro de palavras obscenas for ativado.

Resumo (Auto-Wrapup): Ao encerrar um chat ou chamada, a "Star" gera um resumo automático (Problema-Ação-Resolução) para o operador apenas confirmar.

Base de Conhecimento: Painel de ajuda para o operador pesquisar artigos.

Para o Gestor

Dashboard de Gestão (Wallboard): Uma vista separada que mostra métricas em tempo real (Agentes Online, Fila, SLA, etc.).

Análise de Qualidade (QA) da Star: Um painel que mostra a pontuação de qualidade de todos os operadores, analisada automaticamente pela IA.

Gestão da Base de Conhecimento (IA Star): Uma nova secção no Dashboard de Gestão permite fazer upload de documentos (PDFs, DOCs) para "ensinar" a Star sobre as regras específicas da empresa.

Relatórios de Produtividade:

Menu para exportar relatórios diários do operador.

Modal para escolher entre PDF com Gráficos (IA Insights) ou Excel (Dados Brutos).

O relatório inclui métricas avançadas (CSAT, AHT, Vendas, Transferências, etc.).

🛠️ Tecnologias Utilizadas

Este protótipo é um ficheiro React único (.jsx) e não requer um back-end para ser visualizado.

Linguagem: JavaScript (ES6+)

Biblioteca: React (v18+)

Padrão de Código: Componentes Funcionais e React Hooks (useState, useEffect, useContext, useRef, useCallback, useMemo).

Estilização: Tailwind CSS (Framework Utility-First).

Nota: O modo Dark/Light e as cores personalizadas estão definidos num bloco <style> dentro do ficheiro para portabilidade.

Ícones: SVGs Inline (embutidos diretamente no JSX para performance).

Sintaxe: JSX.