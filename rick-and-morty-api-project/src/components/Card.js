import './Card.css'
export default function Card({character}){
    console.log(character)
    const characterText=`Status: ${character.status} \n Species: ${character.species}\n Gender: ${character.gender}\n Origin: ${character.origin.name}\n Location: ${character.location.name}`
    return(
        <div className="card-wrapper">
            <img src={character.image}/>
            <div className="character-info">
                <h2> {character.name} </h2>
                <p >{characterText}</p>
            </div>
            
        </div>
    )
}