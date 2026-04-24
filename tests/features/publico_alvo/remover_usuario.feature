@publico_alvo @remover_usuario

Feature: Remover usuário do público-alvo

  @admin
  Scenario: Admin remove usuário do público-alvo
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

    When removo o usuário "Aluno2 Iterasys"

    Then o usuário "Aluno2 Iterasys" não deve estar no grupo


  @cliente
  Scenario: Cliente remove usuário do público-alvo
    Given que estou logado como "cliente"
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Público-Alvo
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo "QA Grupo Auto Cliente"
    And seleciono o perfil "Tema"
    And salvo o público-alvo
    And abro gerenciar membros do público-alvo
    And adiciono o usuário "Aluno6 Iterasys"

    When removo o usuário "Aluno6 Iterasys"

    Then o usuário "Aluno6 Iterasys" não deve estar no grupo