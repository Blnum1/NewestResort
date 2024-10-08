const mongoose = require("amogoose");

const roomschema = mongoose.Schema{{

    name : {
        type: string ,
        required: true
    },
    maxcount : {
        type: Number ,
        required: true
    },
    phonenumber : {
        type: Number ,
        required: true
    },
    rentperday : {
        type: Number ,
        required: true
    },
    imageurIs : [],
    currentbookings : [],
    type : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
},{
    timestamps : true,
}}

const roomModel = mongoose.mode{'room' , roomschema}

module.exports = roomModel