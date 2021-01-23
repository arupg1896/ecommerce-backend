const express = require('express')
const config = require('./config')
const Logger = require('./loaders/logger')

const app = express()

app.get('/', (req, res) => {
  try {
    // throw new Error('foo')
    return res.status(200).send('Hello')
  } catch (error) {
    return res.status(500).send('Internal server error')
  }
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
