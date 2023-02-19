import { useState } from 'react'
import './Card.css'
import CardInfo from './CardInfo'
export default function Card({character}){
    //console.log(character)
    const [goster,setGoster]=useState(false)

    const myLeaveFunction = () => {
        setGoster(false);
    }

    const myEnterFunction = () => {
        setGoster(true);
    }

    return(
        <div className="card-wrapper">
            <img src={character.image} alt ={character.image} onMouseLeave={myLeaveFunction} onMouseEnter={myEnterFunction}/>
            {goster?<CardInfo character={character}/>:<></>}   
        </div>
    )
}