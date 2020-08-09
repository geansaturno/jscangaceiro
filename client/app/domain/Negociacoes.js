export default class Negociacoes {
    constructor() {
        this._negociacoes = []
        Object.freeze(this)
    }

    /**
     * 
     * @param {Negociacao} negociacao 
     */
    adiciona(negociacao) {
        this._negociacoes.push(negociacao)
    }

    /**
     * @returns {Array<Negociacao>} Negociações registradas
     */
    paraArray() {
        return [].concat(this._negociacoes)
    }

    esvazia() {
        this._negociacoes.length = 0;
    }
}