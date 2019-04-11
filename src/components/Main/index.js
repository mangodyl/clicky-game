import React from 'react';
import './style.css';
import Row from '../Row';

const Main = ({ children, score, topScore }) => {
    return (
        <div className="jumbotron">
            <div>
                <h2>Score: {score}</h2>
                <h3>Top Score: {topScore}</h3>
            </div>
            <div>
                <Row>
                    {children}
                </Row>
                <Row>
                    {children}
                </Row>
                <Row>
                    {children}
                </Row>
            </div>
        </div>
    )
}

export default Main;