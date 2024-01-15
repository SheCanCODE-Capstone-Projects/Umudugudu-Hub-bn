const CitizenModel = require('../models/citizen.model');

const create = async (req, res, next) => {
    try{
        const addedCitizen = await CitizenModel.create(req.body);

        console.log(addedCitizen);
        res.status(201).json({
            message: "Citizen added successfully",
            addedCitizen
        })
    }
        catch (error){
            res.status(500).send(error.message);
        }
    }

    const update = async (req,res,next) => {
        try{
            var updatedCitizen = await CitizenModel.findOneAndUpdate({ _id: req.query.id }, req.body);
            var  citizen = await CitizenModel.findOne(updatedCitizen._id);
            res.status(200).json({citizen});
        } catch(error) {
            res.status(500).send(error);
        }
    }

    const list = async (req,res,next)=>{
        try{
            var citizen = await CitizenModel.find({});
            res.status(200).json({citizen});
        } catch(error) {
            res.status(500).send("Error in listing citizen");
        }
    }

    const findByFullName = async (req,res,next)=>{
        try{
            console.log(req.query);
            let citizenName = req.query.name;
            var foundCitizen = await CitizenModel.findOne({fullNames:citizenName});
            res.status(302).json({
              data : foundCitizen,
            });
        }catch(error) {
            res.status(500).send(error.message);
        }
    }


    module.exports = {
        create,update,list,findByFullName
    }