export default class HttpRequester {
  get (url) {
    return new Promise((resolve, reject) => {
      const xht = new XMLHttpRequest()
      xht.open('GET', url)
      xht.addEventListener('load', evt => {
        if (evt.currentTarget.status == 200) {
          resolve(JSON.parse(evt.currentTarget.response))
        } else {
          reject(`Não foi possível recuperar informações de ${url}`)
        }
      })
      xht.addEventListener('error', err => {
        reject(err.message)
      })

      xht.send()
    })
  }
}
