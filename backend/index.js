import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import { PORT , MONGO_URL } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'

const app = express();
app.use(express.json()) //middleware for parsing req body
app.use(cors())
// app.use(    //middleware for handling CORS 
//         cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// ) 

// HTTP GET req,res
app.get('/',(req,res)=>{
    console.log(req)
    res.status(234).send("Book Store Backend Connected")
});

// All booksRoute moved to ./routes folder
app.use('/books', booksRoute)

// DB Connection
mongoose
    .connect(MONGO_URL)
    .then(()=>{
        console.log(`app connected to database`);
        app.listen(PORT,()=>{
            console.log(`app running in ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error); 
    })      