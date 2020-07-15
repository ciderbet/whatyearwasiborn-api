const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    max: 12,
    unique: true,
    require: true,
    index: true,
    lowercase: true
  },
  name: {
    type: String,
    trim: true,
    require: true,
    max: 32
  },
  age: {
    type: Number,
    trim: true,
    require: true,
    max: 120,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer'
    }
  }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
