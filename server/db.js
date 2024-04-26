import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const Connection = async () => {   // connecting to mongoose database on cloud *AWS
    try{
        await mongoose.connect( 'mongodb+srv://explorer2020:Explorer%40abcd2020@bookstore-pes1pg23cs006.9btysny.mongodb.net/mybooks', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected');
    } catch(err) {
        console.log('Error:' + err);
    }
}

Connection()