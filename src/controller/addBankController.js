const Bank = require('../models/addBankSchema');

exports.addBank = async(req,res)=>{
    const{id,accno,user,bankdata,type} = req.body;
    const bank = new Bank({
        id,accno,user,bankdata,type
    })

    await bank.save()
      .then(savedBank => {
        res.status(201).json({ savedBank })
      })
      .catch(error => {
        res.status(500).json({error})
        console.log(error)
      });

}

exports.allBank = async (req,res)=>{
    const id = req.params.id;
    try {
      const bank = await Bank.find({user:id});
      res.json({bank});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}
