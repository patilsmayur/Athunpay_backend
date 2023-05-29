const Bank = require('../models/addBankSchema');

exports.addBank = async(req,res)=>{
    const{user,name,branch,account_number} = req.body;
    const bank = new Bank({
        user,name,branch,account_number
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
    const user = req.body.user;
    try {
      const bank = await Bank.find({user});
      res.json(bank);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}