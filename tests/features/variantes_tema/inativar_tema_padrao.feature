@variantes_tema @inativar_tema_padrao

Feature: Inativar tema marcado como padrao

    Scenario: Inativar tema padrao deve estar bloqueado
        Given estou logado como cliente
        When acesso o Gerenciamento de Temas
        And clico em Editar a variante marcada como padrao
        Then A opcao Inativar nao deve ser exibida
