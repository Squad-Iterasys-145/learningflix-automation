@logo_favicon @inserir_favicon

Feature: Inserir favicon em variante

  Scenario Outline: Upload de Favicon em variante com sucesso
    Given que estou logado no "<usuario>"
    When acesso a pagina Gerenciamento de Temas
    And clico em Editar na variante desejada
    And localizo o campo Favicon e faço upload do arquivo
    And clico no botao Salvar
    Then a favicon é salva com sucesso

    Examples:
    | usuario   |
    | admin     |
    | cliente   |