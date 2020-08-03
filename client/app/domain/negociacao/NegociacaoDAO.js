class NegociacaoDAO {
    /**
     * 
     * @param {IDBDatabase} connection 
     */
    constructor(connection) {
        this.connection = connection
        this._store = 'negociacoes'
    }


    /**
     * 
     * @param {Negociacao} negociacao 
     */
    adiciona(negociacao) {
        return new Promise((resolve, reject) => {
            const addRequest = this.connection.transaction(this._store, 'readwrite').objectStore(this._store).add(negociacao)

            addRequest.onerror = e => reject(e)
            addRequest.onsuccess = e => resolve()
        })
    }

    lista() {
        return new Promise((resolve, reject) => {
            const negociacoes = []
            const request = this.connection.transaction(this._store, 'readwrite').objectStore(this._store).openCursor()

            request.onerror = e => reject(e)
            request.onsuccess = event => {
                const current = event.target.result

                if (current) {
                    const value = current.value
                    const negociacao = new Negociacao(value._data, value._quantidade, value._valor)
                    negociacoes.push(negociacao)

                    current.continue()
                } else {
                    resolve(negociacoes)
                }
            }
        })
    }

    apagar() {
        return new Promise((resolve, reject) => {
            const request = this.connection.transaction(this._store, 'readwrite').objectStore(this._store).clear()

            request.onsuccess = e => {
                resolve()
            }

            request.onerror = e => {
                reject(e)
            }
        })
    }
}