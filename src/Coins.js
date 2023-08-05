import './App.css'

const Coins = (props) => {
  return (
    <>
        {props.coins.map((coin)=>{
            return (
                <div className="container" key={coin.id}>
                    <div id='firstc'>
                    <p>{coin.symbol}</p>
                    </div>
                    <div>
                    <img id='coinImg' src={coin.image} alt="image"/>
                    </div>
                    <div>
                    <p>{coin.current_price.toFixed(2)}</p>
                    </div>
                    <div>
                    <p>{coin.high_24h.toFixed(2)}</p>
                    </div>
                    <div>
                    <p>{coin.low_24h.toFixed(2)}</p>
                    </div>
                    <div id='lastc'>
                    <p>{coin.price_change_24h.toFixed(3)}</p>
                    </div>
                </div>
            )
        })}
    </>
  )
}
export default Coins