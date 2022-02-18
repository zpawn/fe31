import React from 'react';

const Greeting = ({ value, onChange }) => {
    return (
        <input type='text' value={value} onChange={onChange} />
    )
}

export default Greeting;
