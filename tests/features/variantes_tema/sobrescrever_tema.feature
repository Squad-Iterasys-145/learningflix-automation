@variantes_tema @sobrescrever_tema
Feature: Sobrescrever tema de usuário
  Como Administrador Cliente
  Quero sobrescrever o tema de um usuário
  Para personalizar a experiência individualmente

  Scenario: Sobrescrever tema com sucesso como Administrador Cliente
    Given que estou logado como "Administrador Cliente"
    When clico em Administração do site como Administrador Cliente
    And acesso Gerenciar Usuários
    And localizo e acesso o perfil do usuário "Aluno Iterasys"
    And seleciono o tema "Treinamento Thamires" no campo Tema
    And clico em Salvar mudanças do perfil
    And clico no avatar do usuário "Aluno Iterasys"
    And clico em Acessar como
    And confirmo o acesso como usuário
    Then o logo do footer corresponde ao tema "Treinamento Thamires"
