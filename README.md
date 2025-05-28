# Adota Paraná 🐾

## Sobre o app

O **Adota Paraná** é um aplicativo voltado à causa animal, com o objetivo de facilitar a **adoção responsável** e a **doação de animais domésticos** no estado do Paraná. O app promove a conexão entre pessoas interessadas em adotar um animal e tutores ou instituições que têm animais disponíveis.

Além disso, o sistema permite **denúncias de publicações inapropriadas ou que descumpram as diretrizes da plataforma**, garantindo um ambiente seguro e confiável para os usuários.

### Funcionalidades prioritárias ✅

- [x] Cadastro e login de usuários (doadores e adotantes) / parcial
- [ ] Publicação de animais para adoção
- [x] Visualização de animais disponíveis
- [ ] Denúncia de publicações inadequadas
- [ ] Avaliação de denúncias por administradores
- [ ] Notificações para usuários e administradores

### Funcionalidades futuras (possíveis incrementos)

- [ ] Integração com ONGs e protetores parceiros
- [ ] Histórico de adoções realizadas
- [ ] Sistema de avaliação entre usuários

---

## Protótipos de tela 🎨

Protótipos desenvolvidos no Figma com foco em usabilidade e fluxo intuitivo.

🔗 [Visualizar protótipos no Figma](https://www.figma.com/design/vSl2OJY0d6xSlA70XfhYCd/Adota-Paran%C3%A1?node-id=0-1&t=hQjo9fn5YnJwV8eF-1)

## Modelagem do banco 🗂️

O banco de dados utilizado é relacional e foi modelado para suportar as entidades centrais do app, como usuários, animais, adoções e denúncias.

🔗 [Visualizar modelagem de banco](https://dbdiagram.io/d/Adota-Parana-68057d471ca52373f5aaa5bd)

## Planejamento de Sprints 🚀

| Sprint   | Período    | Tarefas                                                                                 | Checklist |
| -------- | ---------- | --------------------------------------------------------------------------------------- | --------- |
| Sprint 1 | Semana 1-2 | Estrutura inicial do app, criação do projeto com React Native, tela de login e cadastro | - [x]     |
| Sprint 2 | Semana 3-4 | CRUD de animais, tela de adoção, filtro de busca                                        | - [ ]     |
| Sprint 3 | Semana 5-6 | Sistema de denúncias (usuário e admin), notificações básicas                            | - [ ]     |
| Sprint 4 | Semana 7-8 | ajustes de layout, validações finais                                                    | - [ ]     |
| Sprint 5 | Semana 9   | Testes, correções, documentação e publicação (beta)                                     | - [ ]     |

## Atualizações desde o último checkpoint

O app conta com telas de login (mock), home (lista de animais), detalhes do animal (com opção de adoção) e adotados (favoritos). A gestão dos animais adotados é feita por meio de uma store com Zustand, que controla as funções de adotar, cancelar adoção e verificar se está adotado. Foi criado um type padrão para os animais e componentes reutilizáveis como CardAnimal para exibir informações e InterestButton para interação. A navegação é feita com expo-router e os dados dos animais são mockados para teste.
Adicionei o nativeWind mas ainda não o utilizei (provavelmente configurei errado mas vou corrigir)
https://www.youtube.com/shorts/NiBV0ew5mLw
