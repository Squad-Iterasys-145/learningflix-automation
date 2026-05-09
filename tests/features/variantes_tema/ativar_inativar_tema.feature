@variantes_tema @ativar_inativar_tema
Feature: Ativar e Inativar tema
  Como Administrador Cliente
  Quero ativar e inativar um tema
  Para controlar a disponibilidade dos temas na plataforma

  Scenario Outline: Inativar tema com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas como "<usuario>"
    And clico no menu de ações do card do tema "Automação Administrador Cliente"
    And clico em Inativar
    Then o tema "Automação Administrador Cliente" está inativo

    Examples:
    | usuario               |
    | Administrador Cliente  |
    # | Administrador       |

  Scenario Outline: Ativar tema com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas como "<usuario>"
    And clico no menu de ações do card do tema "Automação Administrador Cliente"
    And clico em Ativar
    Then o tema "Automação Administrador Cliente" está ativo

    Examples:
    | usuario               |
    | Administrador Cliente  |
    # | Administrador       |