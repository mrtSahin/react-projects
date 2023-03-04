import { string, object } from 'yup'

const requiredMessage = "Bu alanın doldurulması zorunludur!"

const validationShema = object({
    userName: string().required(requiredMessage),
    password: string().required(requiredMessage),
    passwordValidation: string().required(requiredMessage),
    name: string().required(requiredMessage),
    surName: string().required(requiredMessage)
})

export default validationShema