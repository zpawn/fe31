import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clock: Date.now(),
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ clock: Date.now() })
        }, 1000);

        console.log('[DID_MOUNT]')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('[DID_UPDATE]')
    }

    componentWillUnmount() {
        console.log('[WILL_UNMOUNT:CLOCK]')
        clearInterval(this.interval);
    }

    render() {
        console.log('[RENDER]')
        return (
            <h1>{this.state.clock}</h1>
        )
    }
}

export default Clock;
