import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CharacterDetails from './CharacterDetails'

function Characters() {


  // toplam 2138 tane karakter var
  const characters=useLocation().state
  console.log(characters)

  

  return (
    <div>Characters
      {characters&& characters.map(characterUrl=>{
        const characterID=characterUrl.split('/')
        return <div><Link to="">{characterID[5]}</Link></div> /** books bize kaakterin sadece api sini verdiğinden dolayı link içerisine karakter ismi yazamıyoruz. çözüm lazım */

      })}
    </div>
  )
}

export default Characters