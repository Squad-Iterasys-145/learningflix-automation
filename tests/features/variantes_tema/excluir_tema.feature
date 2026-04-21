@variantes_tema @excluir_tema
Feature: Excluir tema
  Como Administrador
  Quero excluir um tema
  Para remover temas desnecessários da plataforma

  Background:
    Given que estou logado como Administrador
    When clico em Administração do site
    And clico na aba Aparência
    And clico em Gerenciamento de Temas
    And clico em Adicionar novo tema
    And clico no botão Adicionar
    And limpo e preencho o campo "Nome do tema" com "Automação Thamires"
    And clico em Salvar mudanças

  Scenario: Excluir tema com sucesso
    When clico no menu de ações do card do tema "Automação Thamires"
    And clico em Excluir
    And confirmo a exclusão
    Then o sistema exibe a mensagem "O tema foi excluído com sucesso!"
    And o tema "Automação Thamires" não aparece na listagem