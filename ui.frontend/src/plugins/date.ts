import * as dateFns from 'date-fns'
import { ptBR } from 'date-fns/locale'

const datePlugin = {
  install (app: any) {
    dateFns.setDefaultOptions({ locale: ptBR })
    app.prototype.$date = dateFns
  }
}

export default datePlugin
