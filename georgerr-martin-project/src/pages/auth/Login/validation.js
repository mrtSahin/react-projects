import { string, object } from 'yup'
const requiredMessage = "Bu alanın doldurulması zorunludur!"

const validationShema = object({
    userName: string().required(requiredMessage),
    password: string().required(requiredMessage),
})

export default validationShema