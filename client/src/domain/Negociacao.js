export class Negociacao {
  constructor (_data, _valor, _quantidade) {
    Object.assign(this, { _valor, _quantidade })
    this._data = new Date(_data.getTime())

    Object.freeze(this)
  }

  get data () {
    return new Date(this._data.getTime())
  }

  get valor () {
    return this._valor
  }

  get quantidade () {
    return this._quantidade
  }

  get volume () {
    return this._quantidade * this._valor
  }

  /**
   * 
   * @param {Negociacao} negociacao
   * @returns {Boolean}  
   */
  ehIgual(negociacao) {
    return JSON.stringify(this) == JSON.stringify(negociacao)
  }
}
