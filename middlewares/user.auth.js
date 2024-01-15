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

    const { email, password } = req.body;
    try {
        const validUser = await UserModel.findOne({ email: email});
        if (!validUser) return res.status(500).json({ message: "Wrong password or email!" });    


        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return res.status(500).json({ message: "Wrong password or email!" });    

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

        const { password: hashedPassword, ...rest } = validUser._doc;

        

        res
            .cookie('access_token', token, { httpOnly: true})
            .status(200)
            .json(rest);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const logout=(req,res,next) => {

    res.cookie('jwt','',{maxAge:1});
    res.redirect('/login')
};






module.exports = {
    SignUp,
    login,
    logout

};
