import '../styles/Header.css'

export default function Header({ para }) {

    const formatMoney = (number, fractionDigits = 2, decimal = ',', separator = '.') => {
        var neg = number < 0 ? "-" : "";
        var wholePart = parseInt(number = Math.abs(+number || 0).toFixed(fractionDigits)) + "";
        var separtorIndex = (separtorIndex = wholePart.length) > 3 ? separtorIndex % 3 : 0;
        return neg +
            (separtorIndex ? wholePart.substr(0, separtorIndex) + separator : "") +
            wholePart.substr(separtorIndex).replace(/(\d{3})(?=\d)/g, "$1" + separator) +
            (fractionDigits ? decimal + Math.abs(number - wholePart).toFixed(fractionDigits).slice(2) : "");
    };

    return (
        <div className="Header">
            <p>Harcamak için <strong>$ {(formatMoney(para))}</strong> paranız var!</p>
        </div>
    )
}