import React from 'react';
import { connect } from "react-redux";
import Stop from '../Stop/Stop';

const StopList = (props) => {
    return (
        <React.Fragment>
            <h3>Itinerary</h3>
            <ol>{props.stops.map(stop =>
                <li key={stop.id}>
                    <Stop {...stop}/>
                </li>
            )}</ol>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    stops: state.stops
});

export default connect(mapStateToProps)(StopList);
