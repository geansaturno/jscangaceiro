export class ProxyFactory {
  static create (object, props, trap) {
    return new Proxy(object, {
      get (target, prop) {
        if (ProxyFactory._isFunction(target[prop]) && props.includes(prop)) {
          return function () {
            target[prop].apply(target, arguments)
            trap(target)
          }
        } else {
          return target[prop]
        }
      },

      set (target, prop, value) {
        const setado = Reflect.set(target, prop, value)
        
        if (props.includes(prop)) trap(target)
        
        return setado
      }
    })
  }

  static _isFunction (prop) {
    return typeof prop === typeof Function
  }
}
