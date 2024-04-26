import express from "express"
import dotenv from 'dotenv'
//import { PORT, mongoDBURL } from "./config.js";
import "./db.js"
import cors from 'cors' 
import cookieParser from "cookie-parser"
import { AdminRouter } from "./routes/auth.js"
import { PORT } from "./config.js"
import { studentRouter } from "./routes/student.js"
import { bookRouter } from "./routes/book.js"
import { Book } from "./models/Book.js"
import { Student } from "./models/Student.js"
import { Admin } from "./models/Admin.js"
import https from 'https';
import fs from 'fs';


const app = express()
dotenv.config();

const options = {
    key: fs.readFileSync('C:/REACT/MERN-Bookstore/client/localhost+2-key.pem'),
    cert: fs.readFileSync('C:/REACT/MERN-Bookstore/client/localhost+2.pem')
  };
//const port = process.env.PORT || 3001; // Specify the desired port

app.use(express.json())
app.use(cors({
    origin: ['https://localhost:5173'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',   //gpt  update for cors error in login.jsx
    allowedHeaders: 'Content-Type,Authorization' //gpt update
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/student', studentRouter)
app.use('/book', bookRouter )

app.get('/dashboard', async (req, res) => {
    try {
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const book = await Book.countDocuments()
        return res.json({ok: true, student, book, admin})
    }catch(err) {
        return res.json(err)
    }
})

https.createServer(options, app).listen(process.env.PORT, () => {     
    console.log(`Backend server is running on https://localhost:${process.env.PORT}`);
})