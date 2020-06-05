class NegociacaoService {
  constructor () {
    this._http = new HttpRequester()
  }

  _negociacaoParser (response) {
    return response.map(
      item => new Negociacao(new Date(item.data), item.valor, item.quantidade)
    )
  }

  async obtemNegociacaoesSemana () {
    return this._http.get('/negociacoes/semana').then(this._negociacaoParser)
  }

  async obtemNegociacaoesSemanaAnterior () {
    return this._http.get('/negociacoes/anterior').then(this._negociacaoParser)
  }

  async obtemNegociacoesSemanaRetrasada () {
    return this._http.get('/negociacoes/retrasada').then(this._negociacaoParser)
  }

  async obtemNegociacaoesPeriodo () {
    return Promise.all([
      this.obtemNegociacaoesSemanaAnterior(),
      this.obtemNegociacaoesSemana(),
      this.obtemNegociacoesSemanaRetrasada()
    ]).then(response =>
      response
        .reduce((negociacoes, itens) => negociacoes.concat(itens), [])
        .sort((a, b) => b.data.getTime() - a.data.getTime() || b.quantidade - a.quantidade)
    )
  }
}
