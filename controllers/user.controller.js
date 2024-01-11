const sendEmail = require('../middlewares/sendEmail');
const { UserSigninSchema } = require('../middlewares/user.validation');
const UserModel = require('../models/user.model');

const addUser = async (req,res,next)=>{
    try {
        // console.log(req.body.nationalId);
        const {email,password,nationalId} = req.body;

        const result= await UserSigninSchema.validateAsync({nationalId:req.body.nationalId,phoneNumber:req.body.phoneNumber,email:req.body.email});
        var existUser= await UserModel.findOne({nationalId:req.body.nationalId})
        if (existUser){
            res.status(401).send({message:"User already exists"})
        }
        else {
            var newUser= await UserModel.create(req.body);
       
            

            signUpLink="http://localhost:4000/api/UH/v1/user/auth/signup";

            sendEmail(newUser.email,'Signup into Umudugudu hub',signUpLink);

            res.json({
            message:"User created successfully"
            });
            // res.json({message:"Email sent successfully"});
        }
        
        
    } catch (error) {
        res.status(500).send(error.message);  
    }


};
const deleteUser = async (req,res,next)=>{
    try {
        var id =req.query.id;
        var tobeRemoved = await UserModel.findOne({_id:id});
        var deletedUser = await UserModel.findByIdAndDelete({_id:id});
        if(!deletedUser){
            res.status(401).send({message:"User not found"})
        }
        else{
            res.status(200).send({message:"User deleted successfully",tobeRemoved})
        }
        
    } catch (error) {
        res.status(500).send(error.message)
    }
};



module.exports = {
    addUser,
    deleteUser
};