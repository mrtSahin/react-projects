import { useState } from "react"
import '../styles/Product.css'

export default function Product({setpara,product}){
    const [miktar,setMiktar]=useState(0)
    
    const satHandle=()=>{
        setMiktar(miktar-1)
        setpara(prev=>{return Number(prev)+product.price})
    }

    const satınAlHandle=()=>{
        setMiktar(miktar+1)
        setpara(prev=>{return Number(prev)-product.price})
    }
    
    return(
        <div key={product.name} className='Product'>
            <img src={product.imgUrl}/>
            <p>{product.name}</p>
            <p>$ {product.price}</p>
            {/* <p>{miktar*product.price}</p> */}
            <div className="buttons-wrapper">
                <button key='sat' className="satButton" disabled={miktar<=0?true:false} onClick={satHandle}>Sat</button>
                <p>{miktar}</p>
                <button key='satınAl' className="satınAlButton" onClick={satınAlHandle}>Satın Al</button>
            </div>
        </div>
    )
}