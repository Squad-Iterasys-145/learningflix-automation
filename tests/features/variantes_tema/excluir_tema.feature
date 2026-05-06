@variantes_tema @excluir_tema
Feature: Excluir tema
  Como Administrador
  Quero excluir um tema
  Para remover temas desnecessários da plataforma

  Scenario Outline: Excluir tema com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas como "<usuario>"
    And clico em Adicionar novo tema
    And clico no botão Adicionar
    And limpo e preencho o campo "Nome do tema" com "Tema Excluir <usuario>"
    And clico em Salvar mudanças
    And clico no menu de ações do card do tema "Tema Excluir <usuario>"
    And clico em Excluir
    And confirmo a exclusão
    Then o sistema exibe a mensagem "O tema foi excluído com sucesso!"
    And o tema "Tema Excluir <usuario>" não aparece na listagem

    Examples:
    | usuario               |
    | Administrador Cliente  |
    # | Administrador       |