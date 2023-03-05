import React from 'react'
import { Outlet } from 'react-router-dom'

function Auth() {
    return (
        <div className='auth'>
            <Outlet />
        </div>
    )
}

export default Auth