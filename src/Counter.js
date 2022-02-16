import React, { Component } from 'react';

class Counter extends Component {
    state = {
        title: 'Counter',
        counter: 0
    }

    onMinus = () => {
        console.log('[onMinus]')
        this.setState({ counter: this.state.counter - 1 })
    }

    onMinusCapture = () => {
        console.log('[onMinusCapture]')
    }

    onPlus = (event) => {
        this.setState((state) => {
            return { counter: state.counter + 1 }
        })
        this.setState((state) => {
            return { counter: state.counter + 1 }
        })
        this.setState((state) => {
            return { counter: state.counter + 1 }
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log('[SUBMIT]', event);
    }

    onChange = (event) => {
        this.setState({ title: event.target.value })
    }

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.title} onChange={this.onChange} />
                </form>
                <h1>{this.state.title}</h1>
                <button onClick={this.onMinus} onClickCapture={this.onMinusCapture}>minus</button>
                <h2>{this.state.counter}</h2>
                <button onClick={this.onPlus}>plus</button>
            </>
        )
    }
}

export default Counter;
