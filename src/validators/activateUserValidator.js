import * as yup from "yup"


const activateUserValidator = yup.object({

    password: yup.string().max(20, "Max 20 char"),

    confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').max(20, "Max 20 char")

})

export {activateUserValidator}