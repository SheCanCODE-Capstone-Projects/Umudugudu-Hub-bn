const sendSms = require("../middlewares/sendSMS");
const userModel = require("../models/user.model");


const sendToAll= async (req, res) => {
    const text =req.body.message;
    const allNbr = [];
    var toRecieve = await userModel.find({});
    console.log(toRecieve);
    for (let i = 0; i < toRecieve.length; i++){

        allNbr.push(toRecieve[i].phoneNumber);

    }
    console.log(allNbr);
     
    for (const nbr of allNbr) {

        sendSms(nbr,text);
        
    }
    
};

module.exports = sendToAll