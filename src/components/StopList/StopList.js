import React from 'react';
import { connect } from "react-redux";
import Stop from '../Stop/Stop';
import './StopList.scss';

const StopList = (props) => {
    return (
        <React.Fragment>
            <h3>Itinerary</h3>

            {(!props.stops || props.stops.length === 0 ) &&
                <p>There are no stops in your itinerary.</p>}

            {props.stops && props.stops.length > 0 &&  
            <ol className="stop-list">
                <lh className="list-header">
                    <p className="list-label name">Name</p>
                    <p className="list-label address">Address</p>
                    <p className="list-label completed">Completed</p>
                </lh>
                {props.stops.map(stop =>
                    <li key={stop.id}>
                        <Stop {...stop}/>
                    </li>)}
            </ol>}
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    stops: state.stops
});

export default connect(mapStateToProps)(StopList);
