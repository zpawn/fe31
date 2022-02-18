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

    onPlus = () => {
        this.setState((state) => {
            return { counter: state.counter + 1 }
        });
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

                <div className='input-group' style={{ width: '300px' }}>
                    <button className='btn btn-outline-secondary' onClick={this.onMinus} onClickCapture={this.onMinusCapture}>Minus</button>
                    <input type='text' className='form-control text-center' disabled value={this.state.counter} />
                    <button className='btn btn-outline-secondary' onClick={this.onPlus}>Plus</button>
                </div>
            </>
        )
    }
}

export default Counter;
