const express=require('express')
const app=require('./app');
require('dotenv').config();
//PORT
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on post ${PORT}`);
})
