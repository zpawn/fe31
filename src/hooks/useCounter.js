import { useState, useEffect } from 'react';

const useCounter = (initValue, changeFn) => {
    const [count, setCount] = useState(initValue);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newCount = changeFn(count);
            setCount(newCount);
        }, 1000)

        return () => clearInterval(intervalId)
    }, [changeFn])

    return count;
}

export { useCounter }
