import React, {Component} from 'react';
import Crypto from './Crypto';
import Counter from './Counter';
import Clock from './Clock';

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
            this.setState({showClock: false})
        }, 3000)
    }

    render() {
        return (
            <>
                <Clock/>
                <hr/>
                <Counter/>
                <hr/>
                <Crypto/>
            </>
        )
    }
}

export default App;
