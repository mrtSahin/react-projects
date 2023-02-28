import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

function Characters() {


  // toplam 2138 tane karakter var
  const characters = useLocation().state //BookDetailsdaki Characters sekmesine yönlendiren Link üzerinde state e eklenen değer
  //console.log(characters)
  const [charactersName, setCharactersName] = useState([])

  function getCharactersName() {
    axios.all(characters)// url dizisini .all ile axoisa ekliyor
      .then(responses => {
        responses.forEach(element => {// her url için teker teker axios sorgusunda bulunuyoruz
          axios(element).then(res => setCharactersName(prev => [...prev, { url: res.data.url, name: res.data.name }]))
        })
      });
  }

  useEffect(() => {
    getCharactersName() // sorguyu sadece mount anında yapıyoruz
    return () => {
      setCharactersName([]) // sıkıntı çıkmasına karşın character in içini unmount anında boşaltıyoruz
    }
  }, [])

  //console.log(charactersName)




  return (
    <div>Characters
      {charactersName.map((character) => {
        //console.log(character.url)
        return <div key={character.url}><Link to='/characterDetails' state={{url:character.url,name:character.name}}>{character.name}</Link></div>
      })}
    </div>
  )
}

export default Characters