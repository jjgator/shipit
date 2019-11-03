import React from 'react';
import './App.css';
import AddStop from '../AddStop/AddStop';
import StopList from '../StopList/StopList';

const App = () => {
    return (
        <React.Fragment>
            <header className="header">
                <p>Ship It!</p>
            </header>
            <AddStop/>
            <StopList/>
        </React.Fragment>
    );
};

export default App;
