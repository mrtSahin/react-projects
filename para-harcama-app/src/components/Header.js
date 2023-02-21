import '../styles/Header.css'
import formatMoney from './formatMoney'
export default function Header({ para }) {

    
    return (
        <div className="Header">
            <p style={{color:'white',}}>Harcamak için <strong>$ {(formatMoney(para))}</strong> paranız var!</p>
        </div>
    )
}