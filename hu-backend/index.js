import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import usersRoute from './routes/usersRoute.js';
import './config/dbconfig.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT;

// using body-parser middleware

app.use(cors());
app.use(bodyParser.json()); // for JSON data
app.use(bodyParser.urlencoded({extended: true})) // for URL Encoded data
app.use(express.json());

// defining routes

app.use("/api/users", usersRoute)

app.listen(PORT, (error)=>{
    if(error){
        console.log('Error starting server', error);
    }else{
        console.log(`Server started at ${PORT}`);
    }
})