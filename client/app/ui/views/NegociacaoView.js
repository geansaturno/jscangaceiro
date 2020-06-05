class NegociacaoView extends View {
  /**
   * @param {Negociacoes} negociacoes
   */
  template (negociacoes) {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        ${negociacoes
          .paraArray()
          .map(
            negociacao => `
            <tr>
                <td>${DateConverter.toString(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
                <td>${negociacao.volume}</td>
            </tr>
            `
          )
          .join('')}
        </tbody>
        
        <tfoot>
            <tr>
                <td colspan="3"></td>
                <td>${negociacoes
                  .paraArray()
                  .reduce(
                    (total, negociacao) => total + negociacao.volume,
                    0
                  )}</td>
        </tfoot>
    </table>
    `
  }
}
