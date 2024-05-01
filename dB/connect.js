const mongoose = require('mongoose');

// const connectionString = ''

const connectDB = (url)=>{
    return mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true})
}

module.exports = connectDB;
// mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true})
//     .then(()=>console.log("Connected to DB"))
//     .catch((err)=>console.log(err));