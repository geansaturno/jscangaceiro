class NegociacaoController {
  constructor () {
    const $ = document.querySelector.bind(document)

    this._inputData = $('#data')
    this._inputValor = $('#valor')
    this._inputQuantidade = $('#quantidade')

    this._service = new NegociacaoService()

    this._negociacoes = new Binder(
      new Negociacoes(),
      new NegociacaoView('#tabela-demonstrativa'),
      'adiciona',
      'esvazia'
    )

    this._menssagem = new Binder(
      new Menssagem(),
      new MensagemView('#alertas'),
      'novaMenssagem'
    )
  }

  /**
   * @param {Event} event
   */
  adiciona (event) {
    event.preventDefault()

    try {
      const data = DateConverter.toDate(this._inputData.value)
      const negociacao = new Negociacao(
        data,
        this._inputValor.value,
        this._inputQuantidade.value
      )

      this.limpaCampos()
      this._negociacoes.adiciona(negociacao)
      this._menssagem.novaMenssagem('Negociação inserida')
    } catch (error) {
      console.error(error.stack)

      if (error instanceof DataInvalidaException)
        this._menssagem.novaMenssagem(error.message, 'danger')
      else
        this._menssagem.texto =
          'Um erro ocorreu: Entre em contato com o suporte'
    }
  }

  limpaCampos () {
    this._inputValor.value = 0
    this._inputQuantidade.value = 1
    this._inputData.value = ''

    this._inputData.focus()
  }

  apaga () {
    this._negociacoes.esvazia()
    this._menssagem.novaMenssagem('Negociações removidas com sucesso')
  }

  async importarNegociacoes () {
    try {
      const negociacoesImportadas = await this._service.obtemNegociacaoesPeriodo()
      negociacoesImportadas
        .filter(
          novaNegociacao =>
            !this._negociacoes
              .paraArray()
              .some(negociacaoExistente =>
                negociacaoExistente.ehIgual(novaNegociacao)
              )
        )
        .forEach(negociacao => this._negociacoes.adiciona(negociacao))
    } catch (error) {
      this._menssagem.novaMenssagem(error, 'danger')
    }
  }
}
