@variantes_tema @visualizar_como
Feature: Validação de tema via Acessar como

    Scenario: Validar tema aplicado via “Acessar como”
        Given estou acessando como cliente
        And acesso a pagina gerenciar usuarios
        And seleciono o usuario Aluno Iterasys com um tema atribuido
        When utilizo a funcionalidade acessar como para esse usuario
        And acesso a pagina inicial
        Then a interface deve refletir o tema atribuido