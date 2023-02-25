import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SingIn() {
  const navigate = useNavigate()

  const [newUserInfo, setNewUserInfo] = useState({ userName: "", password: "", passwordValidation: "", name: "", surName: "" })

  // useEffect(()=>{
  //   console.log(newUserInfo)
  // },[newUserInfo])

  // TÜM İNPUTLARIN GİRİLMİŞ VE PASSWORD DOĞRULAMASININ YAPILDIĞI HALE GETİRİLECEK
  // AYNI ZAMANDA KULLANICI KAYIT OLDUĞUNDA BİLGİLERİ GİRİŞ YAPARKEN DOĞRULAMA YAPABİLMEK İÇİN LOCALSTORAGE A EKLENECEK
  const signInOnclickHandle = () => {
    if(document.forms[0].userName.value==""||document.forms[0].password.value==""||document.forms[0].passwordValidation.value==""||document.forms[0].name.value==""||document.forms[0].surname.value==""){
      alert("tüm alanları doldurun")
    }else{
      //JSON.parse(localStorage.setItem(newUserInfo.userName,'vs'))
      navigate('/')
    }
  }


  return (
    <div className='SignIn'>SingIn

      <form>
        <input name='userName' placeholder='user-name' type={'text'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ userName: e.target.value } }) }} />
        <input name='password' placeholder='password' type={'password'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ password: e.target.value } }) }} />
        <input name='passwordValidation' placeholder='password-validation' type={'password'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ passwordValidation: e.target.value } }) }} />
        <input name='name' placeholder='name' type={'text'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ name: e.target.value } }) }} />
        <input name='surname' placeholder='surname' type={'text'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ surName: e.target.value } }) }} />

      </form>




      <button onClickCapture={() => (signInOnclickHandle())}>SignIn</button>
      <button onClick={() => { navigate('/auth') }}>LogIn</button>
    </div>
  )
}


// ikisini de auth a koyalım
// gittiği yerde nerden geldiğini alalım öyle bir şey vardı onu kullanabilriliz
