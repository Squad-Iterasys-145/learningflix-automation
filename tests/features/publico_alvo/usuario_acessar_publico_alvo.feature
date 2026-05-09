@publico_alvo @usuario_acessar_publico_alvo

Feature: Aplicação de tema via público-alvo utilizando acessar como

@admin
Scenario: Administrador adiciona usuário ao público-alvo e valida tema via acessar como

    Given que acesso a página de login

    When preencho o username e password de administrador
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo de Público-Alvo
    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    And adiciono o usuário "Aluno Iterasys"

    Then o usuário "Aluno Iterasys" deve estar no grupo

    When acesso o módulo Gerenciar Usuários
    And clico no avatar do usuário sobrescrito "Aluno Iterasys"
    And clico em Acessar como
    And confirmo o acesso como usuário

    Then devo visualizar o logo do tema aplicado corretamente


@cliente
Scenario: Administrador cliente adiciona usuário ao público-alvo e valida tema via acessar como

    Given que acesso a página de login

    When preencho o username e password de administrador cliente
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo de Público-Alvo
    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    And adiciono o usuário "Aluno Iterasys"

    Then o usuário "Aluno Iterasys" deve estar no grupo

    When acesso o módulo Gerenciar Usuários
    And clico no avatar do usuário sobrescrito "Aluno Iterasys"
    And clico em Acessar como
    And confirmo o acesso como usuário

    Then devo visualizar o logo do tema aplicado corretamente

