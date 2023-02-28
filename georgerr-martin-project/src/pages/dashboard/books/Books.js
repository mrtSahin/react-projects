import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BookDetails from './BookDetails'

function Books() {

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios("https://www.anapioficeandfire.com/api/books?page=1&pageSize=12") // page ve pageSize ile kaçıncı sayfa ve sayfa başına kaç veri döneceğini belirttik.
      // aksi halde default olarak sadece 10 tane veri dönüyor. (isterse binlerce olun)
      .then(res => {
        setBooks(res.data)
        setLoading(false)
      })
  }, [])

  console.log(books)


  return (
    <div>
      Books
      {
        loading?
        <div>Yükleniyor</div>
        :
        <div>
        {books.map(book => {
          return <BookDetails key={book.isbn} book={book} />// 
        }
        )}
      </div>
      }
      




    </div>
  )
}

export default Books