import '../styles/Card.scss'
import CardInfo from './CardInfo'
export default function Card({character}){
    //console.log(character)
   

    return(
        <div className="card-wrapper">
            <img src={character.image} alt ={character.image}/>
            <div className="cardInfo">
                <CardInfo character={character}/>
            </div>
        </div>
    )
 }