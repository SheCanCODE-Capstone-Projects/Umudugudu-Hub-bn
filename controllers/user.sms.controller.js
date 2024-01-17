const sendEmail = require("../middlewares/sendEmail");
// const sendSms = require("../middlewares/sendSMS");
const userModel = require("../models/user.model");


const sendToAll= async (req, res) => {
    const title=req.body.title;
    const text =req.body.message;
    const allEmail = [];
    var toRecieve = await userModel.find({});
    console.log(toRecieve);
    for (let i = 0; i < toRecieve.length; i++){

        allEmail.push(toRecieve[i].email);

    }
    console.log(allEmail);
     
    for (const email of allEmail) {

        sendEmail(email,title,text)
        
    }
    
};

module.exports = sendToAll