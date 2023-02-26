import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookDetails from './BookDetails'

function Books() {

  const [books, setBooks] = useState([])


  useEffect(() => {
    axios("https://www.anapioficeandfire.com/api/books?page=1&pageSize=12") // page ve pageSize ile kaçıncı sayfa ve sayfa başına kaç veri döneceğini belirttik.
      // aksi halde default olarak sadece 10 tane veri dönüyor. (isterse binlerce olun)
      .then(res => { setBooks(res.data) })
  }, [])



  return (
    <div>
      Books
      {books.map(book => {
        return <BookDetails key={book.isbn} book={book} />// 
      }
      )}

    </div>
  )
}

export default Books