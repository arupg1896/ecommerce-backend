const mongoose = require('mongoose')
const config = require('../config/index')
const Logger = require('./logger')
// Connect to Mongoose and set connection variable

const connectMongo = async () => {
  mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true })
  const db = mongoose.connection

  // Added check for DB connection
  db.once('open', () => {
    //   Logger.info('Connected to Database')
    return db
  }).catch(error => {
    Logger.error(`Error connecting db ${error}`)
  })
}

module.exports = connectMongo
