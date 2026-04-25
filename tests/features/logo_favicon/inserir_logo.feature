@logo_favicon @inserir_logo
Feature: Inserir logo em variante

  Scenario Outline: Upload de logo em variante com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas
    And clico em Editar a variante desejada
    And localizo o campo Logo e faço upload do arquivo
    And clico em Salvar
    Then o logo é salvo com sucesso

    Examples:
    | usuario   |
    | adm       |
    | cliente   |