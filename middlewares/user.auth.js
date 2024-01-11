const UserModel = require('../models/user.model');
var bcrypt= require('bcryptjs');
const sendEmail = require('./sendEmail');
const { UserValSchema } = require('./user.validation');
const jwt =require("jsonwebtoken")
const SignUp = async (req, res, next)=>{
    
    
    try {
        const {email ,password} =req.body; 
        const result= await  UserValSchema.validateAsync(req.body);
        // console.log(result);

        
        const userA =await UserModel.findOne({email:email});
        // console.log(userA);
        if(!userA){
            res.status(401).json({ message: "You are not allowed to sign up"});
            
           
        }
        else{
            if(userA.password!==null){
                res.status(401).json({ message: "Account already exists"});
            }
            else{
                var encryPW= bcrypt.hashSync(password,10);
                var newUser= {   
                    email:email,
                    password:encryPW
                }
                 
    
                // var savedUser = await newUser.save();
                var savedUser = await UserModel.findOneAndUpdate({email:req.body.email},newUser);
                
                res.status(201).json({message: "User password saved successfully"});
            }

            
        }

    } catch (error) {

        res.status(500).json({message: error.message});
        
    }
};

const login = async (req,res,next )=>{

    try {
         
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }


}




module.exports = {SignUp};
