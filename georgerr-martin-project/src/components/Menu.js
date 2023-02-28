import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Menu.css"
function Menu() {
  const navigate = useNavigate()
  // kullanıcı adını menü de solda göstermke için aldığımız bilgileri split ile parçalarına ayırarak bir dizi haline getiriyoruz ve kullanıcı ismi 0. eleman oluyor.
  let userName
  if(localStorage.getItem('user')){
    userName=localStorage.getItem('user').split(',')[0]
  }
  
  //console.log(user[0])

  // Sign in yapılırken kullanıcı localstorage a ekleniyor. Login yapılırken de localstorage dan kontrol edilerek giriliyor ama site ilk açıldığında dashboard da açıldığından bir login işlemi yapılmasa da login yapılmış gibi dashboard ı açıyor.
  // bunun kontrolünün yapılmaıs gerekiyor.
  // aynı zamanda kullanıcı önceden login yapmışsa da direkt dashboard ın açılması gerekli

  //console.log(localStorage.user)
  const cikisButtonHandle=()=>{
    localStorage.removeItem('user')
    navigate('/auth')
  }
  return (
    <div className='menu-container'>
      <h2>{userName}</h2>
      <ul>
        <li onClick={()=>{navigate('/books')}}>Books</li>
        <li onClick={()=>{navigate('/houses')}}>Houses</li>
        <li onClick={()=>{navigate('/characters')}}>Characters</li>
      </ul>
      <button className='cikisButton' onClick={cikisButtonHandle}>Çıkış Yap</button>
    </div>
  )
}

export default Menu