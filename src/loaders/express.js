// const config = require('../config/index')
const Logger = require('./logger')

const loadAllExpress = async (app) => {
  require('../routes/index')(app)
  Logger.info('Load all express')
}

module.exports = loadAllExpress
