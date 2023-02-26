import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import "../styles/styles.css"
import validationSchema from './validation'

function Login() {


    // GİRİŞ BİLGİLERİ KARŞILAŞTIRILMASI İÇİN ALINAN GİRDİLERİN DAHA ÖNCE LOCALESTORAGE A EKLENMİŞ Mİ EKLENMİŞSE HERHANGİ BİR KULLANICI BİLGİSİYLE EŞLEŞİYORMU KONTROL EDİLİYOR


    const navigate = useNavigate()

    const kullaniciSorgulama = () => {
        if (localStorage.getItem(values.userName) != null) {
            const kayitliKullanici = JSON.parse(localStorage.getItem(values.userName))
            console.log(kayitliKullanici)
            if (kayitliKullanici[1] != values.password) {
                alert("Yanlış Şifre")
            } else {
                localStorage.user = JSON.parse(localStorage.getItem(values.userName)) // giriş yapan kullanıcıyı bunun üzerinde tutuyoruz
                navigate('/')
            }
        } else {
            alert("Böyle bir kullanıcı yok")
        }
    }

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
        initialValues: {
            userName: "",
            password: ""
        },
        onSubmit: () => {
            //console.log(values)
            kullaniciSorgulama()
        },
        validationSchema

    })


    return (
        <div className='Login'>
            Login
            <form onSubmit={handleSubmit}>
                <div>
                    <input name='userName' id='userName' placeholder='user-name' type={'username'} onChange={handleChange} onBlur={handleBlur} />
                    {errors.userName && touched.userName && (<div>{errors.userName}</div>)}
                </div>
                <div>
                    <input name='password' id='password' placeholder='password' type={'password'} onChange={handleChange} onBlur={handleBlur} autoComplete='on' />
                    {errors.password && touched.password && (<div>{errors.password}</div>)}
                </div>
                <button type='submit' >LogIn</button>
            </form>
            <button onClick={() => { navigate('/auth/signin') }}>SignIn</button>
        </div>
    )
}

export default Login