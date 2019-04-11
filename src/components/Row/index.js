import React from 'react';
import Pic from '../Pics';

const Row = ({ children }) => {
    return (
        <div className="row">
            <Pic>
                {children}
            </Pic>
            <Pic>
                {children}
            </Pic>
            <Pic>
                {children}
            </Pic>
            <Pic>
                {children}
            </Pic>
        </div>
    )
}

export default Row;