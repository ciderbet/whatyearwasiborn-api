const { check } = require('express-validator')

exports.userDetailsValidator = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
  check('age')
    .isNumeric()
    .withMessage('Must be a number')
]
