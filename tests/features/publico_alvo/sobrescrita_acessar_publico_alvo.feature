@publico_alvo @sobrescrita_acessar_publico_alvo

Feature: Sobrescrita de tema no usuário via Gerenciamento de Usuários

@admin
Scenario: Admin define tema no usuário e valida sobrescrita do tema via acessar como

  Given que acesso a página de login

  When preencho o username e password de administrador
  And clico no botão de login

  Then devo ver a página inicial

  When acesso o módulo Gerenciar Usuários
  And edito o usuário "Fulano Junior"
  And seleciono o tema "ClienteLogo"
  And salvo o usuário

  When clico no avatar do usuário sobrescrito "Fulano Junior"
  And clico em Acessar como
  And confirmo o acesso como usuário

  Then devo visualizar o logo do tema aplicado corretamente


@cliente
Scenario: Cliente define tema no usuário e valida sobrescrita do tema via acessar como

  Given que acesso a página de login

  When preencho o username e password de administrador cliente
  And clico no botão de login

  Then devo ver a página inicial

  When acesso o módulo Gerenciar Usuários
  And edito o usuário "Fulano Junior"
  And seleciono o tema "ClienteLogo"
  And salvo o usuário

  When clico no avatar do usuário sobrescrito "Fulano Junior"
  And clico em Acessar como
  And confirmo o acesso como usuário

  Then devo visualizar o logo do tema aplicado corretamente


