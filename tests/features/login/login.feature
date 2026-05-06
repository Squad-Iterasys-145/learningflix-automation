@login
Feature: Login na plataforma

  Scenario: Login com sucesso como Administrador
    Given que acesso a página de login
    When preencho o username e password de administrador
    And clico no botão de login
    Then devo ver a página inicial

