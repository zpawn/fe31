import React, { Component } from 'react';

const filterFn = (coin, search) => {
    return coin.CoinInfo.FullName.toLowerCase().includes(search.toLowerCase())
}

class Crypto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            coins: [],
        }
    }

    componentDidMount() {
        fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(res => res.json())
            .then(({ Data }) => {
                this.setState({ coins: Data })
            })
    }

    onChange = (e) => {
        this.setState({ search: e.target.value })
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.search} onChange={this.onChange}/>
                {this.state.coins.length === 0
                    ? <p>Loading ...</p>
                    : <ul>
                        {this.state.coins.filter((coin) => filterFn(coin, this.state.search)).map((coin, index) => (
                            <li key={coin.CoinInfo.Id}>{coin.CoinInfo.FullName}</li>
                        ))}
                    </ul>
                }
            </>
        )
    }
}

export default Crypto;
