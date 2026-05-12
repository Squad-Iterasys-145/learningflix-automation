@logo_favicon @visualizar_logo

Feature: Pré-visualização exibe logo configurado

  Scenario Outline: Upload de Favicon em variante com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas
    And clico nos 3 pontinhos da variante deseja e em Pré-visualizar
    And observo o canto superior do menu lateral
    Then o logo atribuido ao tema é exibido no menu lateral

    Examples:
    | usuario   |
    # | adm       |
    | cliente   |