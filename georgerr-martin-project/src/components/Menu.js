import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Menu.css"
function Menu() {

  const navigate = useNavigate()
  // kullanıcı adını menü de solda göstermke için aldığımız bilgileri split ile parçalarına ayırarak bir dizi haline getiriyoruz ve kullanıcı ismi 0. eleman oluyor.
  let userName

  if (localStorage.getItem('user')) {
    userName = localStorage.getItem('user').split(',')[0]
  }

  //console.log(user[0])

  // Sign in yapılırken kullanıcı localstorage a ekleniyor. Login yapılırken de localstorage dan kontrol edilerek giriliyor ama site ilk açıldığında dashboard da açıldığından bir login işlemi yapılmasa da login yapılmış gibi dashboard ı açıyor.
  // bunun kontrolünün yapılmaıs gerekiyor.
  // aynı zamanda kullanıcı önceden login yapmışsa da direkt dashboard ın açılması gerekli

  //console.log(localStorage.user)
  const cikisButtonHandle = () => {
    //localStorage.removeItem('user')   //çıkış tuşuna basınca hem Menu cpmponentindeki cikisButtonHandle medodunda hem de Login ekranı ilk kez render edildiğinde bir silme işlemi gerçekleşmiş oluyor bunun için de Menu componentinde bu işlemi yapmıyoruz.
    navigate('/auth')
  }


  return (
    <div className='menu-container'>
      <div className='menuUserName' ><h2>{userName}</h2></div>
      <div className='menuUserNameFirstLetter'><h2>{userName[0]}</h2></div>
      
      <ul className='menuUl'>
        <li className='button' onClick={() => { navigate('/books') }}>Books</li>
        <li className='button' onClick={() => { navigate('/characters', { state: { characters: null, bookName: "All" } }) }}>Characters</li> {/** eğer kullanıcı BookDetails dan gelidkten sonra Characters butonuna bastıysa characters in içini boşaltmak için burdan null gönderiyoruz. */}
      </ul>
      <button className='cikisButton' onClick={cikisButtonHandle}>Çıkış Yap</button>
    </div>
  )
}

export default Menu