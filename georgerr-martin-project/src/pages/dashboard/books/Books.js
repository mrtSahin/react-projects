import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookDetails from './BookDetails'

function Books() {

  const [books, setBooks] = useState([])


  useEffect(() => {
    axios("https://anapioficeandfire.com/api/books") // 12 tane kitap var 
      .then(res => { console.log(res.data) })
  }, [])

  

  return (
    <div>
      Books
      {books.map(book => 
      {
        return <BookDetails key={book.isbn} book={book}/>// 
      }
      )}

    </div>
  )
}

export default Books