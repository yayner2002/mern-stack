const express = require('express')
const route = express.Router()
const create_user = require('../controllers/signupController')


route.post('/signup', create_user)

module.exports = route