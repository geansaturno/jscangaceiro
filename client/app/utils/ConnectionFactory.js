const ConnectionFactory = (() => {
    const stores = ['negociacoes']
    let connection = null
    let close = null

    return class ConnectionFactory {
        static getConnection() {
            return new Promise((resolve, reject) => {
                if(connection) resolve(connection)

                const request = indexedDB.open('cangaceiro', 5)

                request.onerror = (error) => reject(error)
                request.onsuccess = (event => {
                    connection = event.target.result
                    close = connection.close.bind(connection)
                    connection.close = () => {throw new Error('Não é possível fechar a conexão diretamente')}
                    resolve(event.target.result)
                })
                request.onupgradeneeded = (event => ConnectionFactory._createStores(event.target.result))
            })
        }

        static _createStores(connection) {
            stores.forEach(storeName => {
                if(connection.objectStoreNames.contains(storeName))
                    connection.deleteObjectStore(storeName)

                connection.createObjectStore(storeName, {autoIncrement: true})
            })
        }

        static closeConnection() {
            if(connection){
                close()
                connection = null
                close = null
            }
        }
    }
})()

