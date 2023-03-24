const express = require('express');
const mongoose=require('mongoose');
const app = express();
require('dotenv').config();
const DB_URL=process.env.MONGO_DB_URL;
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
//Connect to mongodb
mongoose.connect(DB_URL, {useNewUrlParser:true,
useUnifiedTopology:true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Database Connection Error"));
db.once('open',()=>{
    console.log("Database Connected Successfully");
})


module.exports = app;