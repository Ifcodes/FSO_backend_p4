const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blog')
const { mongoUrl} = require('./utils/config')
const {unknownEndpoint, errorHandler, requestLogger} = require('./utils/middlewares')

mongoose.set('strictQuery', false);

mongoose.connect(mongoUrl).then(() => console.log('Database connection established successfully.')).catch((err) => console.log('Database connection failed to connect', err.message))

app.use(cors())
app.use(express.json())
app.use(requestLogger)

app.use('/api/blogs', blogRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app;