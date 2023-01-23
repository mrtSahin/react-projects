import './Country.css'
function Country({children,countries,totalPopulation}){
    //console.log(countries)
    
    return(
        <div className="Country">

             {countries.map( (country,index)=>{
                let percent=((country.population/totalPopulation)*100).toFixed(2)  
                
                return <div className='wrapper'>
                    <p>{country.country}</p>
                    <div style={{background:'red', width:`${percent}%`}} className="renkliKutu"></div>
                    <p>{country.population}</p>
                 </div>
                
                })}
        </div>
    )
}

export default Country