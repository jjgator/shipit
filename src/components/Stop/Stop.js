import React from 'react';

const Stop = (props) => {
    let { name, address, completed } = props;
    return(
        <div className="stop-wrapper">
            <span>{`${name}: ${address}`}</span>
            <input type="checkbox" checked={completed}></input>
        </div>
    );
};

export default Stop;