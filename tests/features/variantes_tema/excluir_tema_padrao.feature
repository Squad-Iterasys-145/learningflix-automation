@variantes_tema @excluir_tema_padrao

Feature: Excluir tema marcado como padrao

    Scenario: Excluir tema padrao deve estar bloqueado
        Given que estou logado como cliente
        When acesso o Gerenciamento de Temas
        And clico em Editar na variante marcada como padrao
        Then A opcao Excluir nao deve ser exibida
