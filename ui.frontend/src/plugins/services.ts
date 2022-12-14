import services from '../services/main-service'

const servicesPlugin = {
  install (app: any) {
    app.prototype.$services = services
  }
}

export default servicesPlugin
