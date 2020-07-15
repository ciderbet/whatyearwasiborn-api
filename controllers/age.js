const User = require('../models/user')
const shortId = require('shortid')

exports.saveDetails = (req, res) => {
  console.log('AGE CONTROLLER', req.body)
  const { name, age } = req.body
  const username = shortId.generate()
  const newUser = new User({ username, name, age })
  newUser.save((err, result) => {
    if (err) {
      console.log(err)
      return res.status(401).json({
        error: 'Error saving to database, try later'
      })
    }
    const currentTime = new Date()
    const birthYear = currentTime.getFullYear() - age
    return res.json({
      message: `You were born in ${birthYear}`
    })
  })
}
