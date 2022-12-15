import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postsRoutes from './routes/posts.js'

const app=express()
dotenv.config()



app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/posts',postsRoutes)

app.use('/',(req,res)=>{
res.send('hello to viewers')
})

const port=process.env.PORT || 5000


mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(port,()=>console.log(`Server running on port ${port}`)))
.catch((error)=>console.log(error.message))


mongoose.set('strictQuery', false);