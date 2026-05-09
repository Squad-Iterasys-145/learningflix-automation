@variantes_tema @tornar_padrao
Feature: Tornar tema padrão
  Como Administrador
  Quero tornar um tema padrão
  Para que seja aplicado a usuários sem tema definido

  Scenario Outline: Tornar tema padrão com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas como "<usuario>"
    And clico no menu de ações do card do tema "Treinamento Thamires"
    And clico em Tornar o tema padrão
    Then o tema "Treinamento Thamires" está marcado como padrão

    Examples:
    | usuario               |
    | Administrador Cliente  |
    # | Administrador       |
    