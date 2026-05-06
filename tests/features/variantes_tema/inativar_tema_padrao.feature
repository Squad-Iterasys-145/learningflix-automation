@variantes_tema @inativar_tema_padrao
Feature: Inativar tema marcado como padrão

  Scenario Outline: Tentar inativar tema padrão deve ser bloqueado
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas como "<usuario>"
    And clico no menu de ações do card do tema "Treinamento Thamires"
    And clico em Tornar o tema padrão
    And clico no menu de ações do card do tema "Treinamento Thamires"
    Then A opcao Inativar nao deve ser exibida

    Examples:
    | usuario               |
    | Administrador Cliente  |
    # | Administrador       |