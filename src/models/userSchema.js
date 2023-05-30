const mongoose = require('mongoose');

const usaiSchema = new mongoose.Schema({
    bank: {
      type: String,
    //   minlength:30
    },
     
    apps: {
      type: String,
    //   minlength:30
      
    }
  });

const userSchema = mongoose.Schema({
    full_name: {
        type: String,
        maxlength: 50,
        // required: true
    },
    email: {
        type: String,
        trim: true,
        // unique: true,
        // required: true
    },
    mobile_number: {
        type: String,
        minlength: 10,
        // unique: 1,
        // required: true

    },
    usai_id: {
        type: usaiSchema,
        // required:true,
        // unique: 1
    },

    face_id:{
        type:String,
        default:"Face_ID"
        // minlength:30,
     
    },
    pin:{
        type:String,
        minlength:4,
        required: true,
        unique: true
    }
    
},{ timestamps: true })
module.exports = mongoose.model('Users',userSchema);