
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import validationSchema from './validation'

export default function SingIn() {

  const navigate = useNavigate()

  // TÜM İNPUTLARIN GİRİLMİŞ VE PASSWORD DOĞRULAMASININ YAPILDIĞI HALE GETİRİLDİ
  // AYNI ZAMANDA KULLANICI KAYIT OLDUĞUNDA BİLGİLERİ GİRİŞ YAPARKEN DOĞRULAMA YAPABİLMEK İÇİN LOCALSTORAGE A EKLENDİ


  const kullaniciSorgulama = () => {
    if (localStorage.getItem(values.userName) != null) {
      alert('Kayıtlı kullanıcı. Farklı kullanıcı ismi giriniz')
    } else {

      localStorage.setItem(values.userName, JSON.stringify([values.userName,values.password, values.passwordValidation, values.name, values.surName]))// local storage da obje olarak tutabilmek için bu işlemi yapmamız gerekli. eğer yapmazsak localestorage da stirng olarak tutulur
      localStorage.user = JSON.parse(localStorage.getItem(values.userName)) // giriş yapan kullanıcıyı bunun üzerinde tutuyoruz
      //await new Promise(r => (setTimeout(r, 1000))) // gerçek bir backend sorgusu yapıyormuş gibi 1 saniye gecikme eklendi
      navigate('/')
    }
  }


  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      userName: "",
      password: "",
      passwordValidation: "",
      name: "",
      surName: ""
    },
    onSubmit: (values, bag) => {
      // console.log(values)
      // console.log(bag)
      if (values.password != values.passwordValidation) { // burda karşılaştırmayı yapabilmek için useFormikten alınan values yerine onSubmit in döndüğü values kullanılmalı
        return bag.setErrors({ passwordValidation: "Girilen şifre ile aynı değil" })
      } else {
        kullaniciSorgulama()
      }

    },
    validationSchema

  })

  return (
    <div className='SignIn'>SingIn

      <form className='form-container' onSubmit={handleSubmit}>
        {/**        <input name='userName' placeholder='user-name' type={'text'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ userName: e.target.value } }) }} /> */}
        <div>
          <input name='userName' placeholder='user-name' type={'text'} onChange={handleChange('userName')} onBlur={handleBlur} />
          {errors.userName && touched.userName && <div>{errors.userName}</div>}
        </div>

        <div>
          <input name='password' placeholder='password' type={'password'} autoComplete="on" onChange={handleChange('password')} onBlur={handleBlur} />
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>

        <div>
          <input name='passwordValidation' placeholder='passwordValidation' type={'password'} autoComplete="on" onChange={handleChange('passwordValidation')} onBlur={handleBlur} />
          {errors.passwordValidation && touched.passwordValidation && <div>{errors.passwordValidation}</div>}
        </div>

        <div>
          <input name='name' placeholder='name' type={'text'} onChange={handleChange('name')} onBlur={handleBlur} />
          {errors.name && touched.name && <div>{errors.name}</div>}
        </div>

        <div>
          <input name='surName' placeholder='surname' type={'text'} onChange={handleChange('surName')} onBlur={handleBlur} />
          {errors.surName && touched.surName && <div>{errors.surName}</div>}
        </div>

        <div>
          <button onSubmit={handleSubmit} type='submit' >SignIn</button>
        </div>

      </form>

      <button onClick={() => { navigate('/auth') }}>LogIn</button>
    </div>
  )
}


// ikisini de auth a koyalım
// gittiği yerde nerden geldiğini alalım öyle bir şey vardı onu kullanabilriliz
