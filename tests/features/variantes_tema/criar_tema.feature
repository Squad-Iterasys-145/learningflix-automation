@variantes_tema @criar_tema
Feature: Criar novo tema
  Como Administrador
  Quero criar um novo tema
  Para personalizar a plataforma por segmento

  Scenario: Criar tema com sucesso como Administrador
    Given que estou logado como Administrador
    When clico em Administração do site
    And clico na aba Aparência
    And clico em Gerenciamento de Temas
    And clico em Adicionar novo tema
    And clico no botão Adicionar
    And limpo e preencho o campo "Nome do tema" com "Automação Thamires" 
    And clico em Salvar mudanças
    Then o sistema retorna a mensagem "Variante de tema salva com sucesso!"

   Scenario: Tentar criar tema sem preencher o nome obrigatório
    Given que estou logado como Administrador
    When clico em Administração do site
    And clico na aba Aparência
    And clico em Gerenciamento de Temas
    And clico em Adicionar novo tema
    And clico no botão Adicionar
    And limpo o campo "Nome do tema"
    And clico em Salvar mudanças
    Then o sistema exibe a mensagem "Necessários" 
    
