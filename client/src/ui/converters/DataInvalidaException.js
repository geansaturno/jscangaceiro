import { ApplicationException } from '../../utils/ApplicationException.js'

export class DataInvalidaException extends ApplicationException {
    constructor() {
        super("A Data deve ter o formato dd/mm/yyyy")
    }
}