const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const todo = require('./models/todo')
const todorouter = require('./router/todorouter')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB connected"))
.catch(err=>console.log("error is here",err))

app.use('/api/todos',todorouter)

app.listen(9000,()=>{
    console.log("server running succesfully")
})