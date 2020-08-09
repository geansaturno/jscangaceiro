import AbstractClass from './AbstractClass'
import NegociacaoDAO from '../domain/negociacao/NegociacaoDAO'

export default class DaoFactory extends AbstractClass {

    /**
     * @returns {NegociacaoDao}
     */
    static getNegociacaoDao() {
        return ConnectionFactory.getConnection()
        .then(connection => new NegociacaoDAO(connection))
    }
}