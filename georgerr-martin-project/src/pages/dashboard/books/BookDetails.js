import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function BookDetails({ book }) {

  const [isDisable, setDisable] = useState(false)

  const bookClickHandle = () => {
    isDisable ? setDisable(false) : setDisable(true)
    //console.log(isDisable)
  }

  return (
    <div>
      <li onClick={bookClickHandle}>{book.name}</li> {/** eğer kitap isminin yazıldığı alana basılırsa bookClickHandle metodu ile isDisable true yapılarak kitabın bilgileri görünecektir */}
      {
        isDisable &&
        <div>
          <p>name: {book.isbn}</p>
          <p>authors: {book.authors[0]}</p>
          <p>numberOfPages: {book.numberOfPages}</p>
          <p>publisher: {book.publisher}</p>
          <p>country: {book.country}</p>
          <p>mediaType: {book.mediaType}</p>
          <p>released: {book.released}</p>
          <Link to="/characters" state={{ characters: book.characters, bookName: book.name }}>Characters</Link>
        </div>}
    </div>
  )
}

export default BookDetails