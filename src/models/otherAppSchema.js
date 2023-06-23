const mongoose = require('mongoose');

const otherAppSchema = new mongoose.Schema({

    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users', 
        required: true
     },
      title: {
        type: String,
        required: true
      },
      custid: {
        type: String,
        required: true
      }
      
},{timestamps:true});

module.exports = mongoose.model('otherapp', otherAppSchema);