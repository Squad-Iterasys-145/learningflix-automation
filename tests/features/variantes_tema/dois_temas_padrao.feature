@variantes_tema @dois_temas_padrao
Feature: Dois temas padrão simultaneamente
  Como Administrador Cliente
  Quero verificar que não é possível ter dois temas padrão
  Para garantir a integridade da configuração

  Scenario Outline: Não deve ser possível tornar outro tema padrão quando já existe um
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas como "<usuario>"
    And clico no menu de ações do card do tema "Automação Administrador Cliente"
    Then a opção Tornar o tema padrão não é exibida no menu

    Examples:
    | usuario               |
    | Administrador Cliente  |
    # | Administrador       |