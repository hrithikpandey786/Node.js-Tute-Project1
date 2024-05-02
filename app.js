const express = require('express');
const app = express();
const task = require('./routes/tasks')
const connectDB = require('./dB/connect');
const notFound = require('./middleware/not-found');
// app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use(express.json());
require('dotenv').config();

app.use('/api/v1/tasks', task);
app.use(notFound);
const port = process.env.PORT || 3000;

const start = async ()=>{
    try{
        await connectDB(process.env.Mongo_URI);
        app.listen(port, console.log(`Server listening on port ${port}...`));
    } catch (error){
        console.log('error');
    }
}

start();