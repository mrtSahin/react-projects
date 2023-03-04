import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

function Dashboard() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
}

export default Dashboard