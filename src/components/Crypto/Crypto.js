import React, { Component } from 'react';
import path from 'ramda/src/path';
import Controls from './Controls';
import Coins from './Coins';

const API_KEY = 'db9c701da8c65fa798b62a69dad63af1b94d8462f64f781d0d920317ed1b9064';
const BASE_URL = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=${API_KEY}`;

const sortFn = (field) => (a, b) => {
    let pathArr;
    switch (field) {
        case 'name': pathArr = ['CoinInfo', 'FullName']; break;
        case 'price': pathArr = ['RAW', 'USD', 'PRICE']; break;
        default: return 0;
    }

    if (path(pathArr, a) > path(pathArr, b)) {
        return 1;
    }
    if (path(pathArr, a) < path(pathArr, b)) {
        return -1;
    }
    return 0;
};

const filterFn = (coins, sort, search) => {
    const newCoins = coins.filter(
        (coin) => coin.CoinInfo.FullName.toLowerCase().includes(search.toLowerCase())
    );
    newCoins.sort(sortFn(sort));

    return newCoins;
};

class Crypto extends Component {
    state = {
        coins: [],
        search: '',
        sort: '',
    };

    onSearch = (e) => this.setState({ search: e.target.value })

    onSort = (e) => this.setState({ sort: e.target.value })

    componentDidMount() {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(({ Data }) => this.setState({ coins: Data }))
    }

    render() {
        const { search, sort, coins } = this.state;

        return (
            <>
                <h1>Crypto Coins</h1>
                <Controls search={search} sort={sort} onSearch={this.onSearch} onSort={this.onSort}/>
                <Coins coins={filterFn(coins, sort, search)}/>
            </>
        )
    }
}

export default Crypto;
