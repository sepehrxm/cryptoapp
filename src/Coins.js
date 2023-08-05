import './App.css'

const Coins = (props) => {
  return (
    <>
        {props.coins.map((coin)=>{
            return (
                <div className="container" key={coin.id}>
                    <div id='firstc'>
                    <p id='symbol'>{coin.symbol}</p>
                    </div>
                    <div>
                    <img id='coinImg' src={coin.image} alt="image"/>
                    </div>
                    <div>
                    <p>{coin.current_price.toFixed(5)}</p>
                    </div>
                    <div id='lastc'>
                      {coin.price_change_24h>0 ? <p id='green'>{coin.price_change_24h.toFixed(5)}</p> : <p id='red'>{coin.price_change_24h.toFixed(5)}</p>}
                    </div>
                </div>
            )
        })}
    </>
  )
}
export default Coins