require('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./controllers/blog')
const {PORT, mongoUrl} = require('./utils/config')

mongoose.connect(mongoUrl).then(() => console.log('Database connection established successfully.')).catch(() => console.log('Database connection failed to connect'))

app.use(cors())
app.use(express.json())

app.use('/api/blogs', router)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})