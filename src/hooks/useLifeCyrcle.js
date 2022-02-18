import { useEffect } from 'react';

const useMount = (fn) => {
    useEffect(() => {
        fn()
    }, [])
}

const useUnmount = (fn) => {
    useEffect(() => {
        return () => fn()
    }, [])
}

export { useMount, useUnmount }
