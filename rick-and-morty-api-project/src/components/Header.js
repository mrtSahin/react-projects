import resim from '../images/Rick_and_Morty.svg.png'
import '../styles/Header.css'
export default function Header(){


    return(
        <div className='Header'>
            <img className='header-img' src={resim} alt='brand'></img>
        </div>
    )
}