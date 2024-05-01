const express = require('express');
const app = express();
const task = require('./routes/tasks')
const connectDB = require('./dB/connect');
// app.use(express.urlencoded({extended: false}));
app.use(express.json());
require('dotenv').config();

app.use('/api/v1/tasks', task);

const start = async ()=>{
    try{
        await connectDB(process.env.Mongo_URI);
        app.listen(3000, console.log('Server listening on port 3000...'));
    } catch (error){
        console.log('error');
    }
}

start();