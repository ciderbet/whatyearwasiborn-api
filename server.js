const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// db
mongoose.connect(process.env.DATABASE_CLOUD, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err))

// import routes
// const saveDetails = require('./routes/age')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const linkRoutes = require('./routes/link')

// app middlewares
app.use(morgan('dev'))
// app.use(bodyParser.json())
app.use(bodyParser.json({ limit: '5mb', type: 'application/json' }))
app.use(cors({ origin: process.env.CLIENT_URL }))

// middleware
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', linkRoutes)

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`API is running on port ${port}`))
