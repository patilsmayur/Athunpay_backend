const Card = require('../models/addCardSchema');


exports.addCard = async(req,res) =>{
    const{user,cardNumber,cardNickName,expirationDate,cvv} = req.body;
    const card = new Card({user,cardNumber,cardNickName,expirationDate,cvv})

    await card.save()
    .then(savedCard => {
      res.status(201).json({ savedCard })
    })
    .catch(error => {
      res.status(500).json({error})
      console.log(error)
    });
}

exports.allCard = async(req,res)=>{
    const user = req.body.user;
    try {
      const card = await Card.find({user});
      res.json(card);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}