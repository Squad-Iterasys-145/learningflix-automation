@variantes_tema @pre_visualizar_tema

Feature: Pré-visualizar tema
  Como Administrador
  Quero pré-visualizar um tema
  Para verificar as configurações antes de aplicar

Scenario: Pré-visualizar tema com sucesso
    Given que estou logado como Administrador
    When clico em Administração do site
    And clico na aba Aparência
    And clico em Gerenciamento de Temas
    And clico no menu de ações do tema "Treinamento Thamires"
    Then sou redirecionado para a página de pré-visualização do tema

  Scenario: Sair da pré-visualização do tema
    Given que estou logado como Administrador
    When clico em Administração do site
    And clico na aba Aparência
    And clico em Gerenciamento de Temas
    And clico no menu de ações do tema "Treinamento Thamires"
    And clico no botão Sair da pré-visualização
    Then sou redirecionado para a página Gerenciamento de Temas
  

 
