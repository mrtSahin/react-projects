import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/styles.css"
import validationSchema from './validation'

function Login() {



    useEffect(()=>{
        localStorage.removeItem('user') // kullanıcı giriş yaptıktan sonra geri tuşuna basarak login ekranına gelebilir. bir kişi login ekranına gelmişse giriş yapmak için gelmiştir.
        // biz çıkış butonu ile localeStorage dan giriş yapmış olan kullanıcının bilgilerini kaldırıyoruz ama geri tuşu ile login ekranına gelince localestorage da hala bir kullanıcı bilgisi yer almaktadır.
        // bunu silmek için login ekranı ilk kez render edildiğinde bu işlemi yapıyoruz.
        // bu durumda çıkış tuşuna basınca hem Menu cpmponentindeki cikisButtonHandle medodunda hem de Login ekranı ilk kez render edildiğinde bir silme işlemi gerçekleşmiş oluyor bunun için de Menu componentinde bu işlemi yapmıyoruz.
      },[])


    // GİRİŞ BİLGİLERİ KARŞILAŞTIRILMASI İÇİN ALINAN GİRDİLERİN DAHA ÖNCE LOCALESTORAGE A EKLENMİŞ Mİ EKLENMİŞSE HERHANGİ BİR KULLANICI BİLGİSİYLE EŞLEŞİYORMU KONTROL EDİLİYOR


    const navigate = useNavigate()

    const kullaniciSorgulama = (values,bag) => {
        if (localStorage.getItem(values.userName) != null) {
            const kayitliKullanici = JSON.parse(localStorage.getItem(values.userName))
            console.log(kayitliKullanici)
            if (kayitliKullanici[1] != values.password) {
                bag.setErrors({password:"Yanlış Şifre"})
            } else {
                localStorage.user = JSON.parse(localStorage.getItem(values.userName)) // giriş yapan kullanıcıyı bunun üzerinde tutuyoruz
                navigate('/')
            }
        } else {
            bag.setErrors({userName:"Böyle bir kullanıcı yok"})
        }
    }

    const { handleSubmit, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            userName: "",
            password: ""
        },
        onSubmit: (values,bag) => {
            //console.log(values)
            kullaniciSorgulama(values,bag)
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