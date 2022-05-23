import React from 'react';
import Header from '../components/Header';

const Layaout = (props) => {
    return (
        <div className = "Layaout">
            <Header />
                {props.children}
        </div>
    );
}

export default Layaout;