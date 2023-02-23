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
  return (
    <div className='SignIn'>SingIn

      <input placeholder='user-name' type={'text'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ userName: e.target.value } }) }} />
      <input placeholder='password' type={'password'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ password: e.target.value } }) }} />
      <input placeholder='password-validation' type={'password'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ passwordValidation: e.target.value } }) }} />
      <input placeholder='name' type={'text'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ name: e.target.value } }) }} />
      <input placeholder='surname' type={'text'} onChange={e => { setNewUserInfo({ ...newUserInfo, ...{ surName: e.target.value } }) }} />
      

      <button onClick={() => { navigate('/') }}>SignIn</button>
      <button onClick={() => { navigate('/auth') }}>LogIn</button>
    </div>
  )
}


// ikisini de auth a koyalım
// gittiği yerde nerden geldiğini alalım öyle bir şey vardı onu kullanabilriliz
