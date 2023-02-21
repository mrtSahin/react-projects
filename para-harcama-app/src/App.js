import './App.css';
import { useState } from 'react'
import Product from './components/Product';
import Header from './components/Header';
import data from './data/Data'
import Footer from './components/Footer';

function App() {

  const servet=1000000000
  const [para, setPara] = useState(servet)
  const [toplamHarcama,setToplamHarcama]=useState(0)
  
  return (
    <div className="App">
      <Header para={para} />
      <div className='products-wrapper'>
        {data.map(product => (<Product settoplamharcama={setToplamHarcama} setpara={setPara} product={product} />))}
      </div>
        {toplamHarcama>0&&<Footer products={data} toplamHarcama={toplamHarcama} settoplamharcama={setToplamHarcama} setpara={setPara} servet={servet}/>}
    </div>
  );
}

export default App;
