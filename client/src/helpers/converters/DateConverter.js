import { AbstractClass } from '../../utils/AbstractClass.js'

export class DateConverter extends AbstractClass {
  /**
   *
   * @param {String} dateString String para data
   */
  static toDate (dateString) {
    if (!/\d{2}\/\d{2}\/\d{4}/.test(dateString))
      throw new DataInvalidaException()

    return new Date(
      ...dateString
        .split('/')
        .reverse()
        .map((value, index) => value - (index % 2))
    )
  }

  /**
   *
   * @param {Date} date data para virar stirng
   */
  static toString (date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }
}
