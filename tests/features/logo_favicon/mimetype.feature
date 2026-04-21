@logo_favicon @inserir_favicon

Feature: Burlar restrição de formato via renomeação de extensão (MIME Type)

    Scenario Outline: Sistema valida MIME Type e rejeita arquivo inválido
        Given que estou logado como "<usuario>"
        When acesso o Gerenciamento de Temas
        And clico em Editar a variante desejada
        And e faço upload de um arquivo renomeado para .jpeg e clico em salvar
        Then O sistema valida o conteudo e rejeito o upload
