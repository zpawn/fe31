import { useCounter } from '../../hooks/useCounter';

const BackwardCounter = () => {
    const count = useCounter(0, (currentCount) => currentCount - 1)

    return <p>Counter: {count}</p>
}

export default BackwardCounter
