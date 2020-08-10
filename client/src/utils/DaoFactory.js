import {AbstractClass} from './AbstractClass.js'
import {NegociacaoDAO} from '../domain/negociacao/NegociacaoDAO.js'
import {ConnectionFactory} from './ConnectionFactory.js'

export class DaoFactory extends AbstractClass {

    /**
     * @returns {NegociacaoDao}
     */
    static getNegociacaoDao() {
        return ConnectionFactory.getConnection()
        .then(connection => new NegociacaoDAO(connection))
    }
}