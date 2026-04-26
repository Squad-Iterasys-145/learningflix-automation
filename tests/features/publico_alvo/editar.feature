@publico_alvo @editar_publico_alvo

Feature: Editar Público-Alvo

  Como usuário do sistema
  Quero editar um público-alvo
  Para atualizar suas informações corretamente

  @admin
  Scenario: Editar público-alvo com sucesso como admin
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

    
    When edito o público-alvo criado
    And altero o nome do público-alvo para um novo valor
    And clico em Atualizar público-alvo

    Then devo ver o público-alvo com o nome atualizado


  @cliente
  Scenario: Editar público-alvo com sucesso como cliente
    Given que estou logado como "cliente"
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Público-Alvo

    
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo "Grupo QA Cliente"
    And seleciono o perfil "Tema"
    And salvo o público-alvo

    Then devo ver o público-alvo criado

    
    When edito o público-alvo criado
    And altero o nome do público-alvo para um novo valor
    And clico em Atualizar público-alvo

    Then devo ver o público-alvo com o nome atualizado