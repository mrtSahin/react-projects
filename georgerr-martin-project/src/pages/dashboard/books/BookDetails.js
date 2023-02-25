import React, { useState } from 'react'

function BookDetails({book}) {
  const [isDisable, setDisable] = useState(false)
  const bookClickHandle = () => {
    isDisable ? setDisable(false) : setDisable(true)
    console.log(isDisable)
  }
  return (
    <div>
      <li onClick={()=>(bookClickHandle())}>{book.name}</li>
      {isDisable && <button disabled={isDisable}>button</button>}
    </div>
    
  )
}

export default BookDetails