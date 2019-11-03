import React from 'react';
import { connect } from "react-redux";
import { toggleCompleted } from '../../actions/stops';

const Stop = (props) => {
    let { name, address, completed, id, toggleCompleted } = props;
    return(
        <div className="stop-wrapper">
            <span>{`${name}: ${address}`}</span>
            <input 
                type="checkbox" 
                checked={completed}
                onChange={() => {toggleCompleted(id)}}>
            </input>
        </div>
    );
};

export default connect(null, { toggleCompleted })(Stop);