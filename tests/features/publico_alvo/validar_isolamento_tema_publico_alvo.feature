@publico_alvo @validar_isolamento_tema_publico_alvo

Feature: Validar isolamento de tema por público-alvo

@admin
Scenario: Administrador adiciona usuário ao público-alvo e valida isolamento do tema

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

    And realizo login como "aluno2"

    Then devo ver a página de acesso negado ou tema padrão do sistema


@cliente
Scenario: Administrador cliente adiciona usuário ao público-alvo e valida isolamento do tema

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

    And realizo login como "aluno2"

    Then devo ver a página de acesso negado ou tema padrão do sistema

