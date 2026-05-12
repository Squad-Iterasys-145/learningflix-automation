@variantes_tema @ativar_tema_login

Feature: Ativar tema e validar aplicação ao usuário

  @cliente
  Scenario: Usuário volta a receber o tema após ativação

    Given que estou logado como "cliente"

    When acesso o Gerenciamento de Temas como "Administrador Cliente"
    And clico no menu de ações do card do tema "adminLogo"
    And clico em Ativar

    Then o tema "adminLogo" está ativo

    When clico no perfil
    And realizo logout

    And realizo login como "Fulano Junior"

    Then devo visualizar o logo do tema adminLogo

