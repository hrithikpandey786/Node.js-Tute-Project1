const express = require('express');
const app = express();
const task = require('./routes/tasks')

// app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/v1/tasks', task);


app.listen(3000, console.log('Server listening on port 3000...'));
