const express = require('express')
const signupRoutes = require('./routes/signupRoutes')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS)
.then((result) => {
  app.listen(4000, () => console.log("DB Connected..."))
}).catch((err) => console.log(err))

app.use(express.json())
app.use(cors())
// app.use(express.urlencoded({extended: true}))
app.use('/api', signupRoutes)

