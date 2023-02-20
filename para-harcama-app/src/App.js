import './App.css';
import { useState } from 'react'
import Product from './components/Product';
import Header from './components/Header';
import data from './data/Data'

function App() {

  const [para, setPara] = useState(1000000000)
  console.log(data)
  return (
    <div className="App">
      <Header para={para} />
      <div className='products-wrapper'>
        {data.map(product => (<Product setpara={setPara} product={product} />))}
      </div>

    </div>
  );
}

export default App;
