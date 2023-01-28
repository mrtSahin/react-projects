import data from './/components/Data'
import Country from './components/Country'
import "./App.css"
// yorum satırı

function App(){
  //console.log(data)
  return(
    <div className="App">
      <Country countries={data} totalPopulation={data[0].population}/>
    </div>
  )
}

export default App