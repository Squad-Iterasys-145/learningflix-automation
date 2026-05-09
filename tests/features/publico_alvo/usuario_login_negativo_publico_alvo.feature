@publico_alvo @usuario_login_negativo_publico_alvo 

Feature: Remoção de usuário do público-alvo e validação de acesso

  @admin
  Scenario: Admin remove usuário do público-alvo e valida que ele não tem mais acesso

    Given que acesso a página de login

    When preencho o username e password de administrador
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo de Público-Alvo
    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    When removo o usuário "Aluno Iterasys"

    Then o usuário "Aluno Iterasys" não deve estar no grupo

    When clico no perfil
    And realizo logout

    And realizo login como "aluno"

    Then devo ver a página de acesso negado ou tema padrão do sistema


  @cliente
  Scenario: Cliente remove usuário do público-alvo e valida que ele não tem mais acesso

    Given que acesso a página de login

    When preencho o username e password de administrador cliente
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo de Público-Alvo
    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    When removo o usuário "Aluno Iterasys"

    Then o usuário "Aluno Iterasys" não deve estar no grupo

    When clico no perfil
    And realizo logout

    And realizo login como "aluno"

    Then devo ver a página de acesso negado ou tema padrão do sistema