@logo_favicon @inserir_logo
Feature: Trocar o tema

  Scenario Outline: Upload de logo em variante com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas
    And clico em Editar na variante desejada
    And localizo o campo Logo e faço upload do arquivo
    And clico em Salvar
    Then o logo é salvo com sucesso

    Examples:
    | usuario |
    | admin   |
    | cliente |