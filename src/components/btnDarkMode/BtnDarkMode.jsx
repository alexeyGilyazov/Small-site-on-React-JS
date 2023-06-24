import React, { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';


import './style.css'

import moon from './moon.svg'
import sun from './sun.svg'
import detectDarkMode from '../../utils/detectDarkMode';

const BtnDarkMode = () => {
    
    const [darkMode, setDarkMode] = useLocalStorage('light',detectDarkMode())
    


    useEffect(() => {
        if(darkMode === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [darkMode])


    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    const btnNormal = "dark-mode-btn"
    const btnActive = "dark-mode-btn dark-mode-btn--active"



    return (
        <>
            <button onClick={toggleDarkMode} className={darkMode === 'dark' ? btnActive : btnNormal}>
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
            </button>
        </>
    );
}

export default BtnDarkMode;
