import React, {Component} from 'react';
import Crypto from './components/Crypto/Crypto';
import Counter from './components/Counter/Base';
import ForwardCounter from './components/Counter/ForwardCounter';
import BackwardCounter from './components/Counter/BackwardCounter';
import Clock from './components/Clock';
import WelcomeGreeting from './components/Welcome';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'React',
            isShow: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isShow: false })
        }, 3000)
    }

    render() {
        return (
            <>
                {/*{this.state.isShow && <Clock/>}*/}
                <Counter/>
                {/*<Crypto/>*/}
                {/*{this.state.isShow && <WelcomeGreeting/>}*/}
                <ForwardCounter/>
                <BackwardCounter/>
            </>
        )
    }
}

export default App;
