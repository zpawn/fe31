import React, {Component} from 'react';
import Crypto from './components/Crypto/Crypto';
import Counter from './components/Counter';
import Clock from './components/Clock';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'React',
            showClock: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showClock: false })
        }, 3000)
    }

    render() {
        return (
            <>
                {this.state.showClock && <Clock/>}
                <Counter/>
                <Crypto/>
            </>
        )
    }
}

export default App;
