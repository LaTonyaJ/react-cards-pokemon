import {useState} from 'react';

const useFlip = (initialState) => {
    const [isUp, setIsUp] = useState(initialState);
    const toggleFlip = () => {
        setIsUp(isUp => !isUp);
    }
    return [isUp, toggleFlip];
}

export default useFlip;
