@publico_alvo @sobrescrita_tema_publico_alvo

Feature: Sobrescrita de tema no usuário via Gerenciamento de Usuários

  # =========================
  # ADMIN
  # =========================
  @admin
  Scenario: Admin define tema no usuário e valida sobrescrita do tema

    Given que acesso a página de login

    When preencho o username e password de administrador
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo Gerenciar Usuários
    And edito o usuário "Fulano Junior"
    And seleciono o tema "ClienteLogo"
    And salvo o usuário

    When clico no perfil
    And realizo logout

    And realizo login como "aluno6"

    Then devo visualizar o logo do tema aplicado corretamente


  # =========================
  # CLIENTE
  # =========================
  @cliente
  Scenario: Cliente define tema no usuário e valida sobrescrita do tema

    Given que acesso a página de login

    When preencho o username e password de administrador cliente
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo Gerenciar Usuários
    And edito o usuário "Fulano Junior"
    And seleciono o tema "ClienteLogo"
    And salvo o usuário

    When clico no perfil
    And realizo logout

    And realizo login como "Fulano Junior"

    Then devo visualizar o logo do tema aplicado corretamente