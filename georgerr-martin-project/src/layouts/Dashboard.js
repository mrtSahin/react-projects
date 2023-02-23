import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'


function Dashboard() {
    
    const navigate=useNavigate()

    
  return (
    <div>
        <Menu/>
        <Outlet/>
        <button onClick={()=>{navigate('/auth')}}>Çıkış Yap</button>
    </div>
  )
}

export default Dashboard