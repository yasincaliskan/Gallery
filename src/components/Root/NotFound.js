import React from 'react';
import notfound from './icons/notfound.png';
import './home.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={notfound} alt="Not Found" />
        </div>
    )
}

export default NotFound;