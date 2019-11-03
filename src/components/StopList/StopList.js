import React from 'react';
import { connect } from "react-redux";

const StopList = (props) => {
    return (
        <React.Fragment>
            <h3>Itinerary</h3>
            <ul>{props.stops.map(stop =>
                <li key={stop.id}>
                    <p>{`${stop.name}: ${stop.address}`}</p>
                </li>
            )}</ul>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    stops: state.stops
});

export default connect(mapStateToProps)(StopList);
