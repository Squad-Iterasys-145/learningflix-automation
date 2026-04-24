@publico_alvo @excluir_publico_alvo

Feature: Excluir Público-Alvo

  Como usuário do sistema
  Quero excluir um público-alvo
  Para remover grupos desnecessários

  @admin
  Scenario: Admin exclui público-alvo com sucesso

    Given que estou logado como "admin"
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Plugins
    And acesso o módulo de Público-Alvo
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo "Grupo QA Excluir"
    And seleciono o perfil "Tema"
    And salvo o público-alvo

    Then devo ver o público-alvo criado

    When excluo o público-alvo criado

    Then o público-alvo não deve existir


  @cliente
  Scenario: Cliente exclui público-alvo com sucesso

    Given que estou logado como "cliente"
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Público-Alvo
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo "Grupo QA Excluir Cliente"
    And seleciono o perfil "Tema"
    And salvo o público-alvo

    Then devo ver o público-alvo criado

    When excluo o público-alvo criado

    Then o público-alvo não deve existir