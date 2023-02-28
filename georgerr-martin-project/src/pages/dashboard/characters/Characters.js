import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'

function Characters() {


  const [pageId, setPageId] = useState(1)

  // toplam 2138 tane karakter var
  const [characters, setCharacters] = useState(useLocation().state) //BookDetailsdaki Characters sekmesine yönlendiren Link üzerinde state e eklenen değer.
  // https://anapioficeandfire.com/api/books  apisi characterlerin sadece apilerini dönüyor.
  //console.log(characters)
  const [charactersName, setCharactersName] = useState([])

  function getCharactersName() {
    axios.all(characters)// url dizisini .all ile axoisa ekliyor
      .then(responses => { // artık tüm url ler response içerisinde
        responses.forEach(urlElement => {// her url için teker teker axios sorgusunda bulunuyoruz
          axios(urlElement).then(characterResponse => setCharactersName(prev => [...prev, { url: characterResponse.data.url, name: characterResponse.data.name }])) // bu sekmede sadece Link lerinde isimlerini göstereceğiz ve Link ile state lerine api lerini ekleyeceğimiz için state e sadece bu iki değeri eklyioruz.
          // state de sadece url lerini göndermemizin nedeni CharacterDetails da tekrar fetch yapacağımızdandır.
          //console.log(element)
        })
      });
  }

  // kullanıcılar bookdetails tan gelebilir ya da kullanıcı direkt ,Characters sekmesini açabilir bu durumda halihazırdaki api kullanılır

  async function ilkYukle() {
    setCharactersName([])
    const res = await axios(`https://anapioficeandfire.com/api/characters?page=${pageId}&pageSize=50`)

    res.data.forEach(characterElement => {
      setCharactersName(prev => [...prev, { url: characterElement.url, name: characterElement.name }])

    })

    //console.log(res.data[1].name)
  }

  useEffect(() => {
    setCharactersName([])
    if (characters === null) {
      ilkYukle()
      console.log("direkt giriş")
      console.log(charactersName)
    } else {
      getCharactersName() // isteği sadece mount anında yapıyoruz
    }


    return () => {
      setCharactersName([]) // sıkıntı çıkmasına karşın character in içini unmount anında boşaltıyoruz
    }
  }, [])


  // useEffect(() => {
  //   ilkYukle()
  //   console.log(pageId)
  // }, [pageId])

  console.log(charactersName)




// booksdetails dan geldikten sonra characters butonuna basınca içini sıfırlaması lazım
  return (
    <div>Characters
      <div>
        <button onClick={() => { setPageId(prev => prev - 1) }}>Önceki Sayfa</button> 
        <button onClick={() => { setPageId(prev => prev + 1) }}>Sonraki Sayfa</button>
      </div>

      {charactersName === null||charactersName.length===0
        ?
        <div>Karakter bilgisi girilmemiş</div>
        :
        charactersName.map((character) => {
          //console.log(character.url)
          return <div key={character.url}><Link to='/characterDetails' state={character.url}>{character.name ? character.name : 'bilinmiyor'}</Link></div>
        })}
    </div>
  )
}

export default Characters