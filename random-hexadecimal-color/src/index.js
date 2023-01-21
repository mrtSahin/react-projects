import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const rootElement = ReactDOM.createRoot(document.getElementById('root'));

const hexaColor=()=>{
  const numbers=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
  let color='#'
  for(let i=0;i<6;i++){
    const randomNumber= Math.floor(Math.random()*numbers.length);
    color=color+numbers[randomNumber]
  }
  return color
  
}





const olustur=()=>{
  var kutucuklar=[]
  for(let i=0;i<10;i++){
    const color=hexaColor()
    kutucuklar.push(<li key={color} style={{backgroundColor:color}}>{color}</li>)
    
  }
  return kutucuklar
}



const kutular=olustur()
//console.log(kutular)
const App=()=>(
  <div id="kutu_wrapper">{kutular}</div>
)

rootElement.render(<App />)

