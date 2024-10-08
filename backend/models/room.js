const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({

    name : {
        type: String , 
        require: true
    },
    maxcount : {
        type: Number , 
        require:true
    },
    phonenumber : {
        type: Number ,
        require : true
    },
    rentperday : {
        type: Number ,
        require : true 
    },
    imageurls : [],

    currentbooking : [],
    type : {
        type: String , 
        require : true
    },

    desciption : {
        type : String , 
        require : true
    }

} , {
    timestamp : true,
})

const roommodel = mongoose.model('rooms', roomSchema)

module.exports = roommodel