const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://jirayutblue20:pp123pp456@cluster0.dqujb.mongodb.net/mem-rooms';


mongoose.connect(mongoURL);

var connection = mongoose.connection;

connection.on('error' , ()=>{
    console.log('Mongo DB Connection failed');
})

connection.on('connected' , ()=>{
    console.log('Mongo DB connection Successful');
})

module.exports = mongoose