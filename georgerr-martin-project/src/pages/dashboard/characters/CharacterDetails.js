import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {

  const url = useLocation().state // Characters edn Link ilt gönderilen url değerini state den alıyoruz.
  //console.log(detail)
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios(url).then(res => {
      setCharacter(res.data)
      setLoading(false)  // yüklenmeden önce ekrana bilgileri basmaya çalışınca hata veriyor. o yüzden bunu ekledik eğer loading false ise ekrana basacaktır
    })
  }, [])

  return (
    <div>CharacterDetails
      {loading ?
      
      <div>Yükleniyor</div>
      :
      <div>
        <p><strong>{character.name}</strong></p>
        <p>{character.gender}</p>
        <p>{character.culture}</p>
        <p>{character.aliases[0] === '' ? 'bilinmiyor' : character.aliases[0]}</p>
        <p>{character.titles[0] === '' ? 'bilinmiyor' : character.titles[0]}</p>
      </div>}
    </div>
  )
}

export default CharacterDetails