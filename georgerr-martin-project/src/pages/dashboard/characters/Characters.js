import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import './style.css'

function Characters() {


  const [pageId, setPageId] = useState(0) // 2000 den fazla karakter olduğundan dolayı ve apiden 1 sayfadan en fazla 50 veri alınabildiğinden dolayı
  // bunu sayfalara ayırmalıyız ve sayfa numaralarını pageId de tutuyoruz

  // toplam 2138 tane karakter var
  const characters = useLocation().state.characters //BookDetailsdaki Characters sekmesine yönlendiren Link üzerinde state e eklenen değer. https://anapioficeandfire.com/api/books  apisi characterlerin sadece apilerini dönüyor.
  // Aynı zamanda Menu deki Characters butonundaki navigate ile yolanan null state
  //console.log(characters)
  //console.log(useLocation())
  const bookName = useLocation().state.bookName
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

  // kullanıcılar bookdetails tan gelebilir ya da kullanıcı direkt, Characters sekmesini açabilir bu durumda halihazırdaki api kullanılır
  // ya daaa BookDetails dan geldikten sonra Characters butonuna basıp gelebilir.

  async function ilkYukle() { // kullanıcı direkt menüdeki Characters butonu ile geldiğinde çalışacak fonksiyon
    setCharactersName([]) // kullanıcı BookDetails dan geldikten sonra Characters tuşuna basınca önce characters in içini boşaltmamız gerekiyor.
    const res = await axios(`https://anapioficeandfire.com/api/characters?page=${pageId}&pageSize=50`)
    res.data.forEach(characterElement => {
      setCharactersName(prev => [...prev, { url: characterElement.url, name: characterElement.name }])
    })
    //console.log(res.data[1].name)
  }

  useEffect(() => {
    setCharactersName([])
    if (characters !== null) { // eğer BookDetails dan geldiyse characters null olmayacaktır. characters boş değilse içerisindekilerle istek atıyoruz.
      getCharactersName() // isteği sadece mount anında yapıyoruz
    }
    return () => {
      //console.log("unmount")
      setCharactersName([]) // sıkıntı çıkmasına karşın characterName in içini unmount anında boşaltıyoruz
    }
  }, [])

  useEffect(() => { // kullanıcı hem direkt Characters butonuna bastığında BookDetails dan geldikten sonra menüdeki Characters butonu ile geldiğinde çalışacak fonksiyon. 
    // Kullanıcı ilk geldiğinde characters de nasıl bir değişiklik oluyor da burası çalışıyor dersen yukarı da tanımlanıp yükleniyor. bu sayede direkt geldiğinde de characters içeriği yüklendiğinden burası çalışabiliyor.
    // Burada characters i dinliyoruz çünkü BookDetails dan geldiğinde içi dolu bir dizidir. BookDetails dan geldikten sonra Menu deki Characters butonuna basınca da navigate ile null state yollanıyor. böylece characters değiştiğinde bu fonksiyon çalışıyor. 
    // Eğer şöyle bir düşünce olursa o olmuyor denedim. yukarıdaki unmount a setCharacters(null) eklense burasına gerek kalır mıydı. Kullanıcı BookDetails dan geldiktan sonra Characters butonuna basınca zaten ekranda /characters sekmesi gösterildiği için component hiç unmount olmuyor.
    setCharactersName([])
    if (characters === null) {// eğer caracters değeri null döndüyse kulanıcının Menüdeki Characters butonu ile geldiğini anlıyoruz. Çünkü orda state olarak null gönderiyoruz.
      //console.log(characters) // Menu den null döndüğü için ekrana null basacaktır.
      ilkYukle()
    }
  }, [characters])


  useEffect(() => {
    if (characters === null) {
      ilkYukle()
    }
    console.log(pageId)
  }, [pageId])

  //console.log(characters)

  return (
    <div>
      <div className='charactersHeader'>
        {bookName && <div><h1 className='bookName'>{`${bookName} characters`}</h1></div>}

        {characters === null
          &&
          <div className='buttonsWrapper'>
            <button onClick={() => { setPageId(prev => prev > 0 ? prev - 1 : 0) }}>Önceki Sayfa</button>
            <button onClick={() => { setPageId(prev => prev < 43 ? prev + 1 : 43) }}>Sonraki Sayfa</button>
          </div>
        }
      </div>

      <div className='charactersWrapper'>
        {charactersName.length === 0
          ?
          <div>Karakter bilgisi girilmemiş</div>
          :
          charactersName.map((character) => {
            //console.log(character.url)
            return <div className='character' key={character.url}><Link style={{textDecoration:'none'}} to='/characterDetails' state={character.url}><p className='characterName'>{character.name ? character.name : 'bilinmiyor'}</p></Link></div>
          })}
      </div>
    </div>

  )
}

export default Characters