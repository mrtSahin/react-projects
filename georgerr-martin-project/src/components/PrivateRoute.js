
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    
    const kullanıcı=localStorage.getItem('user')
    
        if(!kullanıcı){
            return <Navigate to="/auth/" /> // eğer kullanıcı yoksa login sayfasına yönlendir
            // useNavigate ile yapmaya çalıştığımda olmadı. useNavigate i component ilk kez render edilirken kullanamazsın dedi
        }
        
    
    return children
}

export default PrivateRoute