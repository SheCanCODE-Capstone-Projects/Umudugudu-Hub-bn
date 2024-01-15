const joi = require('joi');

const UserValSchema = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().min(8).required(),
});

const UserSigninSchema = joi.object({
    nationalId: joi.string().regex(/^[0-9]{16}$/).required(),
    phoneNumber:joi.string().regex(/^\+250\d{9}$/).messages({'string.pattern.base': `Phone number must have 12 digits.`}).required(),
    email:joi.string().email().lowercase().required(),




});

module.exports ={ 
    UserValSchema,
    UserSigninSchema
}