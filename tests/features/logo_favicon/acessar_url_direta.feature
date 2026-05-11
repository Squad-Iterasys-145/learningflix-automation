@logo_favicon @acessar_url_direta

Feature: Controle de acesso ao Gerenciamento de Temas

    Scenario Outline: Acesso bloqueado a usuário não administrador
        Given que faço login como usuario não administrador
        When tento acessar a "<url>" diretamente
        Then o sistema deve exibir a mensagem de acesso negado
        And ao clicar no botao continuar devo retornar para a home

    Examples:
    | url                                                                   |
    | https://homolog.learningflix.net/local/multithemes/#/                 |
    | https://homolog.learningflix.net/local/multithemes/#/edit/26/tab-main |