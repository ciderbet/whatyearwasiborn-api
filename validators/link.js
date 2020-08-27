const { check } = require('express-validator')

exports.linkCreateValidator = [
  check('title')
    .not()
    .isEmpty()
    .withMessage('Title is required'),
  check('url')
    .not()
    .isEmpty()
    .withMessage('Url is required'),
  check('categories')
    .not()
    .isEmpty()
    .withMessage('Pick a category'),
  check('type')
    .not()
    .isEmpty()
    .withMessage('Pick a type of either free or paid'),
  check('medium')
    .not()
    .isEmpty()
    .withMessage('Pick a meduim of either video or book')
]

exports.linkUpdateValidator = [
  check('title')
    .not()
    .isEmpty()
    .withMessage('Title is required'),
  check('url')
    .not()
    .isEmpty()
    .withMessage('Url is required'),
  check('categories')
    .not()
    .isEmpty()
    .withMessage('Pick a category'),
  check('type')
    .not()
    .isEmpty()
    .withMessage('Pick a type of either free or paid'),
  check('medium')
    .not()
    .isEmpty()
    .withMessage('Pick a meduim of either video or book')
]
