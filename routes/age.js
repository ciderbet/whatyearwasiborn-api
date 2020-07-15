const express = require('express')
const router = express.Router()

// import validators
const { userDetailsValidator } = require('../validators/user_details')
const { runValidation } = require('../validators')

// import from controllers
const { saveDetails } = require('../controllers/age')

router.post('/', userDetailsValidator, runValidation, saveDetails)

module.exports = router
