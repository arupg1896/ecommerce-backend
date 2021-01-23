const express = require('express')
const config = require('./config')
const Logger = require('./loaders/logger')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
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
