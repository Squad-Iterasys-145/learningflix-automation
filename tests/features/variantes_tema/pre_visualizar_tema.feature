@variantes_tema @pre_visualizar_tema
Feature: Pré-visualizar tema
  Como Administrador
  Quero pré-visualizar um tema
  Para verificar as configurações antes de aplicar

  Scenario Outline: Pré-visualizar tema com sucesso
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas como "<usuario>"
    And clico no menu de ações do tema "Treinamento Thamires"
    Then sou redirecionado para a página de pré-visualização do tema

    Examples:
    | usuario               |
    | Administrador Cliente  |
    # | Administrador       |

  Scenario Outline: Sair da pré-visualização do tema
    Given que estou logado como "<usuario>"
    When acesso o Gerenciamento de Temas como "<usuario>"
    And clico no menu de ações do tema "Treinamento Thamires"
    And clico no botão Sair da pré-visualização
    Then sou redirecionado para a página Gerenciamento de Temas

    Examples:
    | usuario               |
    | Administrador Cliente  |
    # | Administrador       |
  

 
