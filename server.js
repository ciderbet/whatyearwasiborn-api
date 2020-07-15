const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// db
mongoose.connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err))

// import routes
const saveDetails = require('./routes/age')

// app middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors({ origin: process.env.CLIENT_URL }))

// middleware
app.use('/api', saveDetails)

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`API is running on port ${port}`))
