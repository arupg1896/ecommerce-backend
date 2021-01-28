const express = require('express')
const authRouter = express.Router()

authRouter.get('/', (req, res) => {
  res.send('hello Test')
})
module.exports = authRouter
