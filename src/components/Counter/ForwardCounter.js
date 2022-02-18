import { useCounter } from '../../hooks/useCounter';

const ForwardCounter = () => {
    const count = useCounter(0, (currentCount) => currentCount + 1);

    return <p>Counter: {count}</p>
}

export default ForwardCounter;
