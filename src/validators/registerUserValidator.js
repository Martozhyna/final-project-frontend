import Joi from "joi";

const registerUserValidator = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    name: Joi.string().required(),
    surname: Joi.string().required()
})

export {
    registerUserValidator
}