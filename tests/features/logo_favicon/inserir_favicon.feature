@logo_favicon @inserir_favicon

Feature: Inserir favicon em variante

  Scenario Outline: Upload de Favicon em variante com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas
    And clico em Editar a variante desejada
    And localizo o campo Favicon e faço upload do arquivo
    And clico em Salvar
    Then a favicon é salva com sucesso

    Examples:
    | usuario   |
    | admin     |
    | cliente   |