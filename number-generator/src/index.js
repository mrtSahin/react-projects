import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
const rootElement= ReactDOM.createRoot(document.getElementById('root'))

const createNumbers=()=>{
  const count=Math.floor(Math.random()*100)+1 // oluşturulacak sayı sayısı
  const numbers=[]
  for(let i=1;i<count;i++){
    numbers.push(i)
  }
  return numbers
}

const findPrimes=(number)=>{
  let isPrime=true
  for(let i=2;i<number;i++){
    if(0==number%i){
     isPrime=false  // eğer bir sayı 1 ve kendisi hariç bir sayıya bölünürse asal değildir ve isPrime false olur
     break
    }
  }
  return (isPrime & number>1)? true: false // 1 kendisinden başka bir sayıya bölünmese de bir asal sayı değildir bu yüzden 1 almayacağız
}


const Number=(props)=>{
  let color=""
  const number=props.number
  const isPrime=findPrimes(number)
  
  if(isPrime){   
    color+="rgb(229,20,20)"
  }else if(0==number%2){ // eğer sayının 2 ile bölümünden kalan 0 ise çifttir
    color+="rgb(50,220,140)"
  }else{ // 0 değilse tektir
    color+="rgb(250,210,50)"
  }
 
  return(
    <li style={{backgroundColor:color}} key={number}>{number}</li> // style ile li etiketinin arkaplan rengi veriliyor
  )
}

const Numbers=(props)=>{
  const numbers=props.numbers
  const numberLi=numbers.map((number)=>(<Number number={number}/>))
  return (
    <div className="numbersDiv">
      {numberLi}
    </div>
  )
  
}

const App=()=>{
  const numbers=createNumbers()
  return(
    <div className="container">
      <h1>Number Generator</h1>
      <div className="aff">
        <Numbers numbers={numbers}/>   
      </div>
    </div>
  )
}

rootElement.render(<App/>)