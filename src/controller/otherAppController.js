const APP = require('../models/otherAppSchema.js');

exports.addapp = async(req,res)=>{
    const{user,title} = req.body;
    const app = new APP({
        user,title
    })

    await app.save()
      .then(savedapp => {
        res.status(201).json({ savedapp })
      })
      .catch(error => {
        res.status(500).json({error})
        console.log(error)
      });

}

exports.allapp = async (req,res)=>{
    const id = req.params.id;
    try {
      const app = await APP.find({user:id});
      res.json({app});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}
