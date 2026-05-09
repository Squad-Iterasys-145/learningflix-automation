@logo_favicon @mime_type

Feature: Burlar restrição de formato via renomeação de extensão (MIME Type)

    Scenario: Sistema valida MIME Type e rejeita arquivo inválido
        Given que estou logado como cliente
        When acesso o Gerenciamento de Temas
        And clico em Editar na variante desejada
        And e faço upload de um arquivo renomeado para .jpeg e clico em salvar
        Then não exibe bloqueio para arquivo com formato interno inválido

