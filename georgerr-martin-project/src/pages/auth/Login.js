import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./styles/styles.css"

function Login() {
    const navigate=useNavigate()

    const [user,setUser]=useState({userName:"",password:""})

    useEffect(() => {
      console.log(user)
    }, [user])
    
    // TÜM GİRDİLERİN GİRİLDİĞİ HALDE LOGİN BUTONU ENABLE OLACAK
    // GİRİŞ BİLGİLERİ KARŞILAŞTIRILMASI İÇİN ALINAN GİRDİLERİN DAHA ÖNCE LOCALESTORAGE A EKLENMİŞ Mİ EKLENMİŞSE HERHANGİ BİR KULLANICI BİLGİSİYLE EŞLEŞİYORMU KONTROL EDİLECEK
    return (
        
        <div className='Login'>
            Login
            
            <input placeholder='user-name' type={'username'} onChange={e=>{setUser({...user,...{userName:e.target.value}})}}/>
            <input placeholder='password' type={'password'} onChange={e=>{setUser({...user,...{password:e.target.value}})}}/>
            
            
            <button onClick={()=>{navigate('/auth/signin')}}>SignIn</button>
            <button onClick={()=>{navigate('/')}}>LogIn</button>
        </div>
    )
}

export default Login