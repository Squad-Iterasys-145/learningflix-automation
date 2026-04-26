@publico_alvo @adicionar_usuario

Feature: Adicionar usuário ao público-alvo

  Como usuário do sistema
  Quero adicionar usuários a um público-alvo
  Para gerenciar corretamente os membros do grupo

  @admin
  Scenario: Admin adiciona usuário ao público-alvo
    Given que estou logado como "admin"
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Plugins
    And acesso o módulo de Público-Alvo
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo "QA Grupo Auto"
    And seleciono o perfil "Tema"
    And salvo o público-alvo
    And abro gerenciar membros do público-alvo
    And adiciono o usuário "Aluno2 Iterasys"

    Then o usuário "Aluno2 Iterasys" deve estar no grupo


  @cliente
  Scenario: Cliente adiciona usuário ao público-alvo
    Given que estou logado como "cliente"
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Público-Alvo
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo "QA Grupo Auto Cliente"
    And seleciono o perfil "Tema"
    And salvo o público-alvo
    And abro gerenciar membros do público-alvo
    And adiciono o usuário "Aluno4 Iterasys"

    Then o usuário "Aluno4 Iterasys" deve estar no grupo