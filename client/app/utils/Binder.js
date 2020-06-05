class Binder {
  /**
   * @param {Object} model Model a ser atualizado
   * @param {View} view Instancia da view para atualização
   * @param  {...String} props Keys que ativarão a trap
   */
  constructor (model, view, ...props) {
    const proxy = ProxyFactory.create(model, props, target =>
      view.update(target)
    )
    view.update(model)
    return proxy
  }
}
