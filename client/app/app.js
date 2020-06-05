const $ = document.querySelector.bind(document)
const negociacaoController = new NegociacaoController()

$('form').addEventListener(
  'submit',
  negociacaoController.adiciona.bind(negociacaoController)
)

$('#botao-apaga').onclick = negociacaoController.apaga.bind(
  negociacaoController
)

$('#botao-importa').onclick = negociacaoController.importarNegociacoes.bind(
  negociacaoController
)
