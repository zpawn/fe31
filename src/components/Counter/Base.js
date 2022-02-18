import React, { Component } from 'react';
import Button from '../../ui/Button';

class Base extends Component {
    state = {
        title: 'Counter',
        counter: 0
    }

    onMinus = () => {
        console.log('[onMinus]')
        const newStateFn = (currentState) => {
            return { counter: currentState.counter - 1 }
        };

        this.setState(newStateFn)
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
                    <Button color='outline-secondary' onClick={this.onMinus} onClickCapture={this.onMinusCapture}>Minus</Button>
                    <input type='text' className='form-control text-center' disabled value={this.state.counter} />
                    <Button
                        className='someClass'
                        color='outline-secondary'
                        onClick={this.onPlus}
                        disabled={true}
                    >Plus</Button>
                </div>
            </>
        )
    }
}

export default Base;
