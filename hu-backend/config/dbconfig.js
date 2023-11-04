import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI = process.env.MONGO_URL;

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error)=>{
    console.log('Error connecting to database', error);
})