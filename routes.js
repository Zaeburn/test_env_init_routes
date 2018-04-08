const express = require('express')
const route = express.Router()

module.exports = route

route.get('/', (req, res) => {
  res.send('Hi there')
})