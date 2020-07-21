class DaoFactory extends AbstractClass {
    static getNegociacaoDao() {
        return ConnectionFactory.getConnection()
        .then(connection => new NegociacaoDAO(connection))
    }
}