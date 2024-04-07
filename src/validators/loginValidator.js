import Joi from "joi";

const loginValidator = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required()
})

export {
    loginValidator
}