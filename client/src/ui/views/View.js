export class View {

    /**
     * @param {String} selector Eelemento que a view será montada
     */
    constructor(selector) {
        this._element = document.querySelector(selector)

        if(!this._element)
            throw new Error(`elemento ${selector} não encontrado`)
    }

    update(model) {
        this._element.innerHTML = this.template(model)
    }

    template(model) {
        throw new Error('Método template() precisa ser sobrescrito')
    }
}