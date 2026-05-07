@variantes_tema @tema_login_usuario

Feature: Criar tema e validar aplicação no usuário final

  Scenario: Criar tema completo e validar no usuário final

    
    # LOGIN ADMIN
    Given que estou logado como "Administrador"

    
    # CRIAR TEMA
    When acesso o módulo de Administração do site
    And acesso o módulo de Temas
    And crio o tema "AUTO-TEMA"

    And realizo upload do logo
    And realizo upload do favicon
    And salvo o tema

  
    # APLICAR NO USUÁRIO
    And acesso o módulo Gerenciar Usuários
    And edito o usuário "aluno4"
    And seleciono o tema "AUTO-TEMA"
    And salvo o usuário

    
    # VALIDAÇÃO FINAL
    And clico no perfil
    And realizo logout
    And realizo login como "aluno4"

    Then devo visualizar o tema aplicado corretamente