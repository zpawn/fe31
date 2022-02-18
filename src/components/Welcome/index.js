import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import Greeting from './Greeting';
import { useMount, useUnmount } from '../../hooks/useLifeCyrcle';

const WelcomeGreeting = () => {
    const [name, setName] = useState('User');

    useMount(() => {
        console.log('[USE_MOUNT]')
    })

    useUnmount(() => {
        console.log('[USE_UNMOUNT]')
    })

    useEffect(() => {
        console.log('[DID_UPDATE]')
    }, [name])

    const onChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <Welcome name={name}/>
            <Greeting value={name} onChange={onChange}/>
        </>
    )
}

export default WelcomeGreeting;
