import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function BookDetails({ book }) {

  const [ClassName, setClassName] = useState('detailsWrapperOff')

  const bookClickHandle = () => {
    ClassName == 'detailsWrapperOn' ? setClassName('detailsWrapperOff') : setClassName('detailsWrapperOn')
    //console.log(isClassName)
  }

  return (
    <div className='bookDetailsWrapper'>
      <li className='detailsLi' onClick={bookClickHandle}>{book.name}</li> {/** eğer kitap isminin yazıldığı alana basılırsa bookClickHandle metodu ile isClassName detailsWrapperOn yapılarak kitabın bilgileri görünecektir */}

      <div className={ClassName}>
        <p>name: <span>{book.isbn}</span></p>
        <p>authors: <span>{book.authors[0]}</span></p>
        <p>number Of Pages: <span>{book.numberOfPages}</span></p>
        <p>publisher: <span>{book.publisher}</span></p>
        <p>country:<span>{book.country}</span></p>
        <p>media Type: <span>{book.mediaType}</span></p>
        <p>released: <span>{book.released}</span></p>
        <Link style={{textDecoration:'none'}} to="/characters" className='link' state={{ characters: book.characters, bookName: book.name }}><p style={{color:'white',textDecoration:'underline', display:'inline-block'}}>CHARACTERS</p></Link>
      </div>

    </div>
  )
}

export default BookDetails