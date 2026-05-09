@publico_alvo
@usuario_login_publico_alvo

@admin
Feature: Aplicação de tema por público-alvo

  Scenario: Administrador adiciona usuário ao público-alvo e valida tema aplicado

    Given que acesso a página de login

    When preencho o username e password de administrador
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo de Público-Alvo
    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    And adiciono o usuário "Aluno Iterasys"

    Then o usuário "Aluno Iterasys" deve estar no grupo

    When clico no perfil
    And realizo logout

    And realizo login como "aluno"

    Then devo visualizar o tema aplicado com o logo "CAPACLI.png"


@cliente
Scenario: Administrador cliente adiciona usuário ao público-alvo e valida tema aplicado

    Given que acesso a página de login

    When preencho o username e password de administrador cliente
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo de Público-Alvo
    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    And adiciono o usuário "Aluno Iterasys"

    Then o usuário "Aluno Iterasys" deve estar no grupo

    When clico no perfil
    And realizo logout

    And realizo login como "aluno"

    Then devo visualizar o logo do tema aplicado