const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    full_name: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    mobile_number: {
        type: String,
        minlength: 10,
        unique: 1,
        required: true

    },
    usai_id:{
        type:String,
        minlength:30,
        required: true

    },
    face_id:{
        type:String,
        minlength:30,
        required: true
    },
    pin:{
        type:String,
        minlength:10,
        required: true
    }
    
})
module.exports = mongoose.model('Users',userSchema);