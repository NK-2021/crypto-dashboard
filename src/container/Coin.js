import React from 'react';
import './Coin.css';

const Coin = ({key, name,image, symbol, price, volume, priceChange, marketCap}) => {
    // console.log(priceChange);
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt={name}/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>INR{price}</p>
                    <p className='coin-volume'>INR{volume.toLocaleString()}</p>
                    {priceChange < 0 ? 
                    (<p className='coin-percentage red'>{priceChange.toFixed(2)}%</p>):
                    (<p className='coin-percentage green'>{priceChange.toFixed(2)}%</p>)}
                    <p className='coin-marketcap'>
                        Market Cap:{" "} INR{" "}{marketCap.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
