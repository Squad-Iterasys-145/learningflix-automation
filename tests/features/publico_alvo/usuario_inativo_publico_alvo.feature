@publico_alvo @usuario_inativo_publico_alvo

Feature: Usuário inativo não aparece no Público-Alvo

  Como administrador do sistema
  Quero garantir que usuários inativos não apareçam no Público-Alvo
  Para manter a integridade dos grupos

  @admin
  Scenario: Admin valida que usuário inativo não aparece no Público-Alvo

    Given que acesso a página de login

    When preencho o username e password de administrador
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo Gerenciar Usuários
    And inativo o usuário "Aluno4 Iterasys"

    When acesso o módulo de Administração do site
    And acesso o módulo de Público-Alvo

    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    And pesquiso o usuário "Aluno4 Iterasys"

    Then o usuário "Aluno4 Iterasys" não deve aparecer na busca


  @cliente
  Scenario: Cliente valida que usuário inativo não aparece no Público-Alvo

    Given que acesso a página de login

    When preencho o username e password de administrador cliente
    And clico no botão de login

    Then devo ver a página inicial

    When acesso o módulo Gerenciar Usuários
    And inativo o usuário "Aluno4 Iterasys"

    When acesso o módulo de Público-Alvo
    And pesquiso pelo público-alvo "Teste Validação"
    And abro gerenciar membros do público-alvo encontrado

    And pesquiso o usuário "Aluno4 Iterasys"

    Then o usuário "Aluno4 Iterasys" não deve aparecer na busca