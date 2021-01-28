const express = require('express')
const config = require('./config')
const Logger = require('./loaders/logger')

const app = express()

// Load all routes
require('./routes/index')(app)
require('./loaders/index')(app)

// test routes start
app.get('/', (req, res) => {
  return res.send('home')
})
// test routes end

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
