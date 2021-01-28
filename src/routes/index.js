const authRouter = require('./api/auth')
const config = require('../config/index')
const Logger = require('../loaders/logger')

const initRoutes = async (app) => {
  // Start super admin routes initialize

  app.use(config.api.prefix, authRouter)

  //  End super admin routes initialize

  Logger.info('All routes loaded successfully')
}

module.exports = initRoutes
