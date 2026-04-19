Feature: Gerenciamento de Público-Alvo

  Como administrador do sistema
  Quero criar um público-alvo
  Para segmentar usuários corretamente

  @publico_alvo
  Scenario: Criar público-alvo com sucesso

    Given que estou logado no sistema
    And estou na tela inicial

    When acesso o módulo de Administração do site
    And acesso o módulo de Plugins
    And acesso o módulo de Público-Alvo
    And clico em Adicionar público-alvo
    And preencho o nome do público-alvo "Grupo QA"
    And seleciono o perfil "Tema"
    And salvo o público-alvo

    Then devo ver a tela de Público-Alvo
    And devo ver o público-alvo "Grupo QA" criado
