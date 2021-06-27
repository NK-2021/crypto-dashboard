import {useEffect, useState} from "react";
import axios from 'axios';
import {getListings} from '../api';
import Coin from "./Coin";

const API_KEY = 'fe0c5a4c-bfb9-4b1f-8f2e-89aceee06c1c';

const DashboardContainer = () =>{

    const[coins, setCoins] = useState([]);
    const[search, setSearch] = useState('');

    const listingApiCall = async ()=>{
        try {
            let response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
            setCoins(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        listingApiCall();
    },[])

    const handleChange = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()));

    console.log(coins);

    return(
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
                </form>
            </div>
            {filteredCoins.map(coin=>{
                const {id, name, image, symbol, market_cap, current_price, price_change_percentage_24h, total_volume} = coin;
                const props = {
                    key: id,
                    name,
                    image,
                    symbol,
                    price: current_price,
                    marketCap: market_cap,
                    priceChange: price_change_percentage_24h,
                    volume: total_volume
                }
                return(<Coin {...props}/>)
            })}
        </div>
    );
}
export default DashboardContainer;