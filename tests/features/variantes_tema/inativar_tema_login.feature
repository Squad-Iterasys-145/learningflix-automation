
@variantes_tema @inativar_tema_login

Feature: Inativar tema e validar fallback no login

  Como administrador cliente
  Quero inativar um tema
  Para garantir que usuários recebam o tema padrão automaticamente

  @cliente
  Scenario: Usuário recebe tema padrão após inativação do tema

    Given que estou logado como "cliente"

    When acesso o Gerenciamento de Temas como "Administrador Cliente"
    And clico no menu de ações do card do tema "adminLogo"
    And clico em Inativar

    Then o tema "adminLogo" está inativo

    When clico no perfil 
    And realizo logout 
    And realizo login como "Fulano Junior"


    
    Then devo visualizar o tema padrão do sistema
