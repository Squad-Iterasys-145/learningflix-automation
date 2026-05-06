@variantes_tema @criar_tema
Feature: Criar novo tema
  Como Administrador
  Quero criar um novo tema
  Para personalizar a plataforma por segmento

  Scenario Outline: Criar tema com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas como "<usuario>"
    And clico em Adicionar novo tema
    And clico no botão Adicionar
    And limpo e preencho o campo "Nome do tema" com "Automação <usuario>"
    And clico em Salvar mudanças
    Then o sistema retorna a mensagem "Variante de tema salva com sucesso!"

    Examples:
    | usuario      |
    #| Administrador |
    | Administrador Cliente |
