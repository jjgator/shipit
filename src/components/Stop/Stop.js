import React from 'react';
import { connect } from "react-redux";
import { toggleCompleted, removeStop } from '../../actions/stops';

const Stop = (props) => {
    let { name, address, completed, id, toggleCompleted, removeStop } = props;
    return(
        <div className="stop-wrapper">
            <span>{`${name}: ${address}`}</span>
            <input 
                type="checkbox" 
                checked={completed}
                onChange={() => toggleCompleted(id)}>
            </input>
            <button onClick={() => removeStop(id)}>X</button>
        </div>
    );
};

export default connect(null, { toggleCompleted, removeStop })(Stop);