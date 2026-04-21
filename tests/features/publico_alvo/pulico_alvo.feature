Feature: Gerenciamento de Público-Alvo

  Como usuário do sistema
  Quero criar um público-alvo
  Para segmentar usuários corretamente

  @publico_alvo @admin
  Scenario: Criar público-alvo com sucesso como admin

  Given que estou logado como "admin"
  And estou na tela inicial

  When acesso o módulo de Administração do site
  And acesso o módulo de Plugins
  And acesso o módulo de Público-Alvo
  And clico em Adicionar público-alvo
  And preencho o nome do público-alvo "Grupo QA"
  And seleciono o perfil "Tema"
  And salvo o público-alvo

  Then devo ver o público-alvo criado


  @publico_alvo @cliente
  Scenario: Criar público-alvo com sucesso como cliente

  Given que estou logado como "cliente"
  And estou na tela inicial

  When acesso o módulo de Administração do site
  And acesso Gerenciar Público-Alvo
  And clico em Adicionar público-alvo
  And preencho o nome do público-alvo "Grupo QA Cliente"
  And seleciono o perfil "Tema"
  And salvo o público-alvo

  Then devo ver o público-alvo criado