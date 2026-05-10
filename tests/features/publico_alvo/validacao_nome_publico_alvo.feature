@publico_alvo @validacao_nome_publico_alvo @negativo @positivo

Feature: validação_nome_publico_alvo

  Scenario Outline: Validar nome do público-alvo

    Given que estou logado como "<usuario>"
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Público-Alvo
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo com "<nome>"
    And seleciono o perfil "Tema"
    And salvo o público-alvo

    Then o sistema deve "<resultado>"

    Examples:
      | usuario | nome | resultado |
      | admin   |      | erro      |
      | admin   | a    | erro      |
      | admin   | ab   | erro      |
      | admin   | abc  | sucesso   |
      | cliente |      | erro      |
      | cliente | a    | erro      |
      | cliente | ab   | erro      |
      | cliente | abc  | sucesso   |