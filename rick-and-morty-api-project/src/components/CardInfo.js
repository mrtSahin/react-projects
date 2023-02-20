import '../styles/Card.scss'
export default function CardInfo({character}) {
    const basliklar=['Status','Species','Gender','Origin','Location']
    const bilgiler=[character.status,character.species,character.gender,character.origin.name,character.location.name]
    
    return (
    <>
        <div >
            <h2> {character.name} </h2>
            {basliklar.map((baslik, index) => { return <div> <p className='baslik'>{baslik}</p><p className='bilgi'>{bilgiler[index]}</p></div> })}

        </div>
    </>
        
    )
}