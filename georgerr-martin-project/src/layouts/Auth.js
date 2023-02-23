import React from 'react'
import { Outlet} from 'react-router-dom'

function Auth() {
    
    return (
        <div>Auth
            <Outlet />
        </div>

    )
}

export default Auth