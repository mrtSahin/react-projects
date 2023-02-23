import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Menu.css"
function Menu() {
  const navigate = useNavigate()
  return (
    <div className='menu-container'>
      <ul>
        <li onClick={()=>{navigate('/books')}}>Books</li>
        <li onClick={()=>{navigate('/houses')}}>Houses</li>
        <li onClick={()=>{navigate('/characters')}}>Characters</li>
      </ul>

    </div>
  )
}

export default Menu