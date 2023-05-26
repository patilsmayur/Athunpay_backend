const User = require('../models/userSchema');


exports.setPIN = async(req,res) =>{

    
    const{full_name,email,mobile_number,usai_id,face_id,pin} = req.body;

    const existingPin = await User.findOne({pin})
    if (existingPin) {
      return res.status(409).json({ error: 'PIN already exists' });
    }
    const user = new User({
        full_name,email,mobile_number,usai_id,face_id,pin
      });
      await user.save()
      .then(savedUser => {
        res.status(201).json({ savedUser })
      })
      .catch(error => {
        res.status(500).json({error})
        console.log(error)
      });

   
   

}

exports.verify = async(req,res) =>{
   const {pin} = req.body;
   const existingPin = await User.findOne({pin})
    if (existingPin) {
      return res.status(201).json({ message:'verified' });
    }
    else{
        return res.status(400).json({error:"Enter pin properly"});
    }
}

