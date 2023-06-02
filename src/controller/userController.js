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

exports.getUser = async(req,res) =>{

  const id = req.params.id;

  User.findOne({ _id: id })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

    
      res.json({user});
    })
    .catch(error => {
      
      res.status(500).json({ message: 'Error retrieving user', error });
    });

}

exports.login = (req,res) =>{
  const {mobile_number} = req.body;
  User.find({mobile_number:mobile_number}).then(
    user=>{
      if(user) {
        res.status(200).json({user});
      }
      else{
      return res.status(400).json({message:"Not Registered"});
      }
      
    }
  ).catch(err => {
    res.status(500).json({err})
  })

}