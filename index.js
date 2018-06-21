//const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')



app.use(cors())
app.use(bodyParser.json())
app.use(middleware.logger)
app.use('/api/blogs', blogRouter)
app.use(middleware.error)


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose
  .connect(process.env.MONGODB_URI)
  .then( () => {
    //console.log('connected to database', process.env.MONGODB_URI)
  })
  .catch( error => {
    console.log(error)
  })



const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
