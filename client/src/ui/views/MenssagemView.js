import { View } from './View.js'

export class MenssagemView extends View {
  /**
   * @param {Menssagem} menssage
   */
  template (menssage) {
    return menssage.texto
      ? `<p class="alert alert-${menssage.tipo}">${menssage.texto}</p>`
      : `<p></p>`
  }
}
