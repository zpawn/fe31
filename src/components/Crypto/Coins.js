import React from 'react';

const Coins = ({ coins }) => (
    <table className="table table-striped">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
        </tr>
        </thead>
        <tbody>
        {coins && coins.map((coin) => (
            <tr key={coin.CoinInfo.Id}>
                <td>
                    <img
                        src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                        alt={`Coin ${coin.CoinInfo.FullName}`}
                        style={{ width: '50px' }}
                    />
                </td>
                <td>{coin.CoinInfo.FullName && coin.CoinInfo.FullName}</td>
                <td>{coin.DISPLAY && coin.DISPLAY.USD && coin.DISPLAY.USD.PRICE && coin.DISPLAY.USD.PRICE}</td>
            </tr>
        ))}
        </tbody>
    </table>
);

export default Coins;
