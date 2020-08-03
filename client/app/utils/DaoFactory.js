class DaoFactory extends AbstractClass {

    /**
     * @returns {NegociacaoDao}
     */
    static getNegociacaoDao() {
        return ConnectionFactory.getConnection()
        .then(connection => new NegociacaoDAO(connection))
    }
}