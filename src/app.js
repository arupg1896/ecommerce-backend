const express = require('express')
const path = require('path')
const config = require('./config')
const Logger = require('./loaders/logger')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  return res.render('home')
})

app.listen(config.port, err => {
  if (err) {
    Logger.error(err)
    process.exit(1)
  } else {
    Logger.info(`
            ################################################
            🛡️  Server listening on port: ${config.port} 🛡️ 
            ################################################
        `)
  }
})

module.exports = app
