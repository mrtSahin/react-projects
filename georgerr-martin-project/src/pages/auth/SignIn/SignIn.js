
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import validationSchema from './validation'
import { useEffect } from 'react'

export default function SingIn() {

  const navigate = useNavigate()

  // TÜM İNPUTLARIN GİRİLMİŞ VE PASSWORD DOĞRULAMASININ YAPILDIĞI HALE GETİRİLDİ
  // AYNI ZAMANDA KULLANICI KAYIT OLDUĞUNDA BİLGİLERİ GİRİŞ YAPARKEN DOĞRULAMA YAPABİLMEK İÇİN LOCALSTORAGE A EKLENDİ

  const kullaniciSorgulama = (bag) => {
    if (localStorage.getItem(values.userName) != null) {
      bag.setErrors({ userName: 'Kayıtlı kullanıcı. Farklı kullanıcı ismi giriniz' })
    } else {
      localStorage.setItem(values.userName, JSON.stringify([values.userName, values.password, values.passwordValidation, values.name, values.surName]))// local storage da obje olarak tutabilmek için bu işlemi yapmamız gerekli. eğer yapmazsak localestorage da stirng olarak tutulur
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
      if (values.password !== values.passwordValidation) { // burda karşılaştırmayı yapabilmek için useFormikten alınan values yerine onSubmit in döndüğü values kullanılmalı
        return bag.setErrors({ passwordValidation: "Girilen şifre ile aynı değil" })
      } else {
        kullaniciSorgulama(bag)
      }
    },
    validationSchema
  })

  return (
    <div className='login-and-signin' style={{height:'700px'}}>
      <h2>SignIn</h2>

      <form className='form-box' onSubmit={handleSubmit}>
        {/**        <input name='userName' placeholder='user-name' type={'text'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ userName: e.target.value } }) }} /> */}
        <div className='inputBox'>
          <input name='userName' type={'text'} autoComplete='off' onChange={handleChange('userName')} onBlur={handleBlur} required spellcheck="false" />
          <label htmlFor='userName'>Username</label>
          {errors.userName && touched.userName && <div className='error'>{errors.userName}</div>}
        </div>

        <div className='inputBox'>
          <input name='password' type={'password'} autoComplete="on" onChange={handleChange('password')} onBlur={handleBlur} required />
          <label htmlFor='password'>Password</label>
          {errors.password && touched.password && <div className='error'>{errors.password}</div>}
        </div>

        <div className='inputBox'>
          <input name='passwordValidation' type={'password'} autoComplete="on" onChange={handleChange('passwordValidation')} onBlur={handleBlur} required />
          <label htmlFor='passwordValidation'>Validation</label>
          {errors.passwordValidation && touched.passwordValidation && <div className='error'>{errors.passwordValidation}</div>}
        </div>

        <div className='inputBox'>
          <input name='name' type={'text'} autoComplete='off' onChange={handleChange('name')} onBlur={handleBlur} required spellcheck="false" />
          <label htmlFor='name'>Name</label>
          {errors.name && touched.name && <div className='error'>{errors.name}</div>}
        </div>

        <div className='inputBox'>
          <input name='surName' type={'text'} autoComplete='off' onChange={handleChange('surName')} onBlur={handleBlur} required spellcheck="false" />
          <label htmlFor='surName'>Surname</label>
          {errors.surName && touched.surName && <div className='error'>{errors.surName}</div>}
        </div>

        <div>
          <button onSubmit={handleSubmit} type='submit' >Sign In</button>
        </div>
      </form>

      <button onClick={() => { navigate('/auth') }}>Log In</button>

    </div>
  )
}


// ikisini de auth a koyalım
// gittiği yerde nerden geldiğini alalım öyle bir şey vardı onu kullanabilriliz
