export default class Menssagem {
  constructor (texto = '', tipo = 'info') {
    this._texto = texto
    this._tipo = tipo
  }

  get texto () {
    return this._texto
  }

  get tipo() {
    return this._tipo
  }

  novaMenssagem(texto, tipo = 'info') {
    this._texto = texto
    this._tipo = tipo
  }
}
