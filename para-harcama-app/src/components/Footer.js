
import '../styles/Footer.css'
import formatMoney from './formatMoney'

export default function Footer({toplamHarcama,products,settoplamharcama,setpara,servet}){
    const resetButtonHandle=()=>{
        settoplamharcama(0) 
        setpara(servet)
        products.map(product=>{product.miktar=0})
    }
    return(
        <div className="Footer">
            <h3>Alışveriş Detayları</h3>
            {products.map(product=>(product.miktar>0&&<p className='footer-product'>{product.name} <span>x {product.miktar}</span></p>))}
            <hr/>
            <p className='toplam-harcama'><strong>Toplam: ${formatMoney(toplamHarcama)}</strong></p>
            <button className='buttonSepetiSıfırla' onClick={resetButtonHandle} >Sepeti Sıfırla</button>
        </div>
    )
}