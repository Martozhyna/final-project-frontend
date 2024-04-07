import * as yup from "yup"

const activateUserValidator = yup.object({
    password: yup.string().max(128, "Max 128 char"),
    confirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').max(128, "Max 128 char")
})

export {activateUserValidator}