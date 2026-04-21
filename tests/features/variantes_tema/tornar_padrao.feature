@variantes_tema @tornar_padrao
Feature: Tornar tema padrão
  Como Administrador
  Quero tornar um tema padrão
  Para que seja aplicado a usuários sem tema definido

  Scenario: Tornar tema padrão com sucesso
    Given que estou logado como Administrador
    When clico em Administração do site
    And clico na aba Aparência
    And clico em Gerenciamento de Temas
    And clico no menu de ações do card do tema "Treinamento Thamires"
    And clico em Tornar o tema padrão
    Then o tema "Treinamento Thamires" está marcado como padrão
    