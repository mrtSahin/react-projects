import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {

  const[characters,setCharacters]=useState([])
  const url='https://rickandmortyapi.com/api/character/'

  useEffect(() => {
    fetch(url)
    .then(res=>
        //console.log(res)
       res.json()
    )
    .then(data=>{
        //console.log(data)
        setCharacters(data.results)
        //console.log(data)
    })
    
  }, [])
 

  //console.log(characters)
 
 
  
  return (
    
    <div className="App">
      {characters.map(ch=>(<Card character={ch}/>))}

    </div>
  );
}

export default App;
