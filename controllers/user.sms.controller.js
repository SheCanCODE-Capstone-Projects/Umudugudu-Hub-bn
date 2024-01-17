const sendEmail = require("../middlewares/sendEmail");
const messageModel = require("../models/message.model");
// const sendSms = require("../middlewares/sendSMS");
const userModel = require("../models/user.model");


const sendToAll = async (req, res) => {
    const title = req.body.title;
    const text = req.body.message;
    const allEmail = [];
    var toRecieve = await userModel.find({});
    console.log(toRecieve);
    for (let i = 0; i < toRecieve.length; i++) {

        allEmail.push(toRecieve[i].email);

    }
    console.log(allEmail);

    for (const email of allEmail) {

        sendEmail(email, title, text)

    };
    const toSave = {
        to: "Users",
        subject: title,
        message: text
    }

    var savedMessage = await messageModel.create(toSave);
    res.status(200).send({ message: "Message well saved and sent to the users" })

};

const viewAll = async (req, res, next) => {
    try {
        const allMessages = await messageModel.find({ to: "Users" });
        res.status(200).send(allMessages);

    } catch (error) {
        res.status(500).send({ message: "Error getting all messages", error: error.message });
    }

}

module.exports = { sendToAll, viewAll }