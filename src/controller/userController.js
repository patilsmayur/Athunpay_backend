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

  await User.findOne({ _id: id })
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

exports.login = async (req,res) =>{
  // const {phone} = req.body;

  // User.findOne({phone}).then(
  //   user=>{
  //     if(user) {
  //       res.status(200).json({user});
  //     }
  //     else{
  //     return res.status(400).json({message:"Not Registered"});
  //     }
      
  //   }
  // ).catch(err => {
  //   res.status(500).json({err})
  // })
  try{
    const {mobile_number} = req.body;
    const foundData = await User.find({mobile_number:mobile_number}).exec();
    if(foundData && foundData.length!=0){
        res.json({foundData});
    }
    else{
        res.status(404).json({ message: 'Data not found' });
    }
}   
catch(err){
    res.send("Error"+err);
}
}