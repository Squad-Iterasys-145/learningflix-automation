@publico_alvo @buscar_publico_alvo

Feature: Buscar público-alvo

  Como usuário do sistema
  Quero buscar um público-alvo pelo nome
  Para localizar rapidamente grupos cadastrados

  @admin
  Scenario: Admin busca público-alvo pelo nome
    Given que estou logado como "admin"
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Público-Alvo
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo "Grupo Busca Admin"
    And seleciono o perfil "Tema"
    And salvo o público-alvo

    When busco pelo público-alvo criado
    Then devo ver apenas o público-alvo buscado


  @cliente
  Scenario: Cliente busca público-alvo pelo nome
    Given que estou logado como "cliente"
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Público-Alvo
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo "Grupo Busca Cliente"
    And seleciono o perfil "Tema"
    And salvo o público-alvo

    When busco pelo público-alvo criado
    Then devo ver apenas o público-alvo buscado