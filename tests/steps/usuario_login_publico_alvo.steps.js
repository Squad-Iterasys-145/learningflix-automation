const { When, Then } = require('@cucumber/cucumber');


// BUSCAR PÚBLICO-ALVO
When(
  'pesquiso pelo público-alvo {string}',
  async function (nomePublico) {

    this.nomePublico = nomePublico;

    await this.publicoPage.buscarPublico(nomePublico);

    await this.publicoPage.validarBuscaPublico(nomePublico);
  }
);

// GERENCIAR MEMBROS
When(
  'abro gerenciar membros do público-alvo encontrado',
  async function () {

    await this.publicoPage.abrirGerenciarMembros(
      this.nomePublico
    );
  }
);


