import React from 'react';
import './style.css'

import gitIcon from './../../img/icons/gitHub-black.svg'

const BtnGitHum = ({link}) => {
    return (
        <>
            <a href={link} target='_blabk' rel='noreferrer' className="btn-outline">
                <img src={gitIcon} alt="" />
                GitHub repo
            </a>
        </>
    );
}

export default BtnGitHum;
