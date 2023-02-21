
import '../styles/Product.css'
import formatMoney from './formatMoney'

export default function Product({settoplamharcama,setpara,product}){
    
// BİG DECİMAL KULLANILABİLİR Mİ(JAVA DA VARDI JS DE DE VARMIŞ)   https://stackoverflow.com/questions/16742578/bigdecimal-in-javascript
// ÇOK SAYIDA EKMEK ALIP GERİ SATINCA VİRGÜLDEN SONRAKİ SAYILARDA SIKINTI ÇIKIYOR 


    const satHandle=()=>{
        setpara(prev=>{return Number(prev)+product.price})
        product.miktar--
        settoplamharcama(prev=>(prev=prev-product.price))
    }

    const satınAlHandle=()=>{
        
        setpara(prev=>{return Number(prev)-product.price})
        product.miktar++
        settoplamharcama(prev=>(prev=prev+product.price))
    }
    
    return(
        <div key={product.name} className='Product'>
            <img src={product.imgUrl}/>
            <p>{product.name}</p>
            <p>$ {formatMoney(product.price)}</p>
            {/* <p>{product.miktar*product.price}</p> */}
            <div className="buttons-wrapper">
                <button key='sat' className="satButton" disabled={product.miktar<=0?true:false} onClick={satHandle}>Sat</button>
                <p>{product.miktar}</p>
                <button key='satınAl' className="satınAlButton" onClick={satınAlHandle}>Satın Al</button>
            </div>
        </div>
    )
}