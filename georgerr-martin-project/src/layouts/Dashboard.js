import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'


function Dashboard() {

  const navigate = useNavigate()

  // Sign in yapılırken kullanıcı localstorage a ekleniyor. Login yapılırken de localstorage dan kontrol edilerek giriliyor ama site ilk açıldığında dashboard da açıldığından bir login işlemi yapılmasa da login yapılmış gibi dashboard ı açıyor.
  // bunun kontrolünün yapılmaıs gerekiyor.
  // aynı zamanda kullanıcı önceden login yapmışsa da direkt dashboard ın açılması gerekli
  console.log(localStorage.user)
  const cikisButtonHandle=()=>{
    localStorage.removeItem('user')
    navigate('/auth')
  }
  return (
    <div>
      <Menu />
      <Outlet />
      <button onClick={cikisButtonHandle}>Çıkış Yap</button>
    </div>
  )
}

export default Dashboard