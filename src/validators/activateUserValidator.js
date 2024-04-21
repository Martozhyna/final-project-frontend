import * as yup from "yup"

const activateUserValidator = yup.object({
    password: yup.string().min(6, 'Мінімум 6 символів').matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s])+$/, 'Пароль має містити мінімум 1 цифру, 1 велику та маленьку букви та 1 спец. символ').max(12, "Максимум 12 символів"),
    confirm: yup.string().oneOf([yup.ref('password'), null], 'Паролі мають співпадати').min(6, 'Мінімум 6 символів').matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s])+$/, 'Пароль має містити мінімум 1 цифру, 1 велику та маленьку букви та 1 спец. символ').max(12, "Максимум 12 символів"),
})

export {activateUserValidator}