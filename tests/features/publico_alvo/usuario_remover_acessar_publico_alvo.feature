@publico_alvo @usuario_remover_acessar_publico_alvo

Feature: Remoção de usuário do público-alvo e validação do impacto no acesso

@admin
Scenario: Admin remove usuário do público-alvo e valida impacto no acesso

    Given que acesso a página de login

    When preencho o username e password de administrador
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo de Público-Alvo
    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    And removo o usuário "Aluno Iterasys"

    Then o usuário "Aluno Iterasys" não deve estar no grupo

    When acesso o módulo Gerenciar Usuários
    And clico no avatar do usuário sobrescrito "Aluno Iterasys"
    And clico em Acessar como
    And confirmo o acesso como usuário

    Then devo ver a página de acesso negado ou tema padrão do sistema


@cliente
Scenario: Cliente remove usuário do público-alvo e valida impacto no acesso

    Given que acesso a página de login

    When preencho o username e password de administrador cliente
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo de Público-Alvo
    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    And removo o usuário "Aluno Iterasys"

    Then o usuário "Aluno Iterasys" não deve estar no grupo

    When acesso o módulo Gerenciar Usuários
    And clico no avatar do usuário sobrescrito "Aluno Iterasys"
    And clico em Acessar como
    And confirmo o acesso como usuário

    Then devo ver a página de acesso negado ou tema padrão do sistema