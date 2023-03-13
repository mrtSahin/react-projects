import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import './style.css'

function CharacterDetails() {

  const url = useLocation().state // Characters edn Link ilt gönderilen url değerini state den alıyoruz.
  //console.log(detail)
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios(url)
      .then(res => {
        setCharacter(res.data)
      })
      .finally(() => {
        setLoading(false)  // yüklenmeden önce ekrana bilgileri basmaya çalışınca hata veriyor. o yüzden bunu ekledik eğer loading false ise ekrana basacaktır
      })
  }, [])

  const isThere = (value) => {
    return value ? value : 'BİLİNMİYOR'
  }

  return (
    <div>{/**CharacterDetails */}
      {loading
        ?
        <div>Yükleniyor</div>
        :
        <div className='characterDetailsWrapper'>
          <h2><strong>{isThere(character.name)}</strong></h2>
          <p>Gender: <span>{isThere(character.gender)}</span> </p>
          <p>Culture: <span>{isThere(character.culture)}</span> </p>
          <p>Aliase: <span>{character.aliases[0] === '' ? 'BİLİNMİYOR' : character.aliases[0]}</span> </p>
          <p>Tilte: <span>{character.titles[0] === '' ? 'BİLİNMİYOR' : character.titles[0]}</span> </p>
        </div>}
    </div>
  )
}

export default CharacterDetails