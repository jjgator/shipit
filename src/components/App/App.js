import React from 'react';
import './App.scss';
import AddStop from '../AddStop/AddStop';
import StopList from '../StopList/StopList';
// import EditStopDialog from '../EditStopDialog/EditStopDialog';

const App = () => {
    return (
        <React.Fragment>
            <header className="header">
                <p className="header-text">Ship It!</p>
            </header>
            <div className="main">
                <AddStop/>
                <StopList/>
            </div>
        </React.Fragment>
    );
};

export default App;
