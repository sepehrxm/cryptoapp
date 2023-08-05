import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Coins from './Coins';
import Header from './Header';
import coin from './coin.png'

function App() {
  let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en"
  let [coins, setCoins] = useState([])
  
  let getCoins = async () => {
      try {
        // setIsLoading(true)
        let response = await axios(url)
        let data = response.data
        setCoins(data)
        console.log(data)
        // setIsLoading(false)
        
      } catch (error) {
        console.log(error.response)
        // setIsError(true)
      }
    }

    useEffect(()=>{
      getCoins()
    }, [])


  return (
    <div id='parent'>
      <div className='top'>
        <div>
        <img id='topImg' src={coin} alt="coin" />
        </div>
        <div>
        <h2 id='market'>Coins Market Data (USD)</h2>
        </div>
      </div>

      <Header/>
      <Coins coins={coins}/>
      <footer>Mobayenlsepehr@gmail.com</footer>
    </div>
  );
}

export default App;
