const { Message } = require("twilio/lib/twiml/MessagingResponse");
const citizenModel = require("../models/citizen.model")
const express=require('express');

var dApp=express();
dApp.get('/getData',async (req,res)=>{
    try {
        const allCitizens = await citizenModel.find({});
        console.log(allCitizens);
        var totFamilies= allCitizens.length;
        var allPopulation=[];
        var allChildren=[];
        var totp=0;
        var totf=0;
        for (let i = 0; i < allCitizens.length; i++) {
            allPopulation.push(allCitizens[i].numberOfHousePeople);
            
            totp+=allCitizens[i].numberOfHousePeople;
            allChildren.push(allCitizens[i].numberOfChildren[i]);
            totf+=allCitizens[i].numberOfChildren
    
        }
        console.log(allPopulation);
        console.log(allChildren);
        res.send({
            totf,
            totp,
            totFamilies
        })
     
        
    } catch (error) {
        res.send({message:"Error loading page try again",error:error.message})
        
    }

    

}
)

module.exports = dApp