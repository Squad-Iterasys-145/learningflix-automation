const { When, Then } = require('@cucumber/cucumber');

// Preenche o nome do público-alvo (mantido)
When('preencho o nome do público-alvo com {string}', async function (nome) {
  this.nomePublico = nome; // guarda o nome para usar no Then

  const input = this.publicoPage.inputNome;

  await input.waitFor({ state: 'visible', timeout: 15000 });

  await input.fill(nome ?? '');
});

// Step principal 
Then('o sistema deve {string}', async function (resultado) {

  // VALIDAÇÃO DE ERRO (mantido)
  if (resultado === 'erro') {
    await this.publicoPage.validarMensagemMinimoCaracteres();
    return;
  }

  // VALIDAÇÃO DE SUCESSO 
  if (resultado === 'sucesso') {

    await this.publicoPage.validarPublicoCriado(this.nomePublico);

    return;
  }

  throw new Error(`Resultado não mapeado: ${resultado}`);
});