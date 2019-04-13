import React from 'react';
import './style.css';

const Main = ({ children }) => {
    return (
        <div className="jumbotron">
            {children}
        </div>
    )
}

export default Main;