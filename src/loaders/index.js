/* eslint-disable no-unused-vars */
const mongooseLoader = require('./mongoose')
const Logger = require('./logger')

const loadAll = async (app) => {
  // Start load mongo connection
  const mongoConnection = mongooseLoader
  Logger.info('✌️ DB loaded and connected!')
  // End load mongo connection

  // Start load all express libary
  require('./express')(app)
  // End load all express libary
}
module.exports = loadAll
