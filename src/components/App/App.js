import React from 'react';
import './App.css';
import AddStop from '../AddStop/AddStop';

const App = () => {
    return (
        <React.Fragment>
            <header className="header">
                <p>Ship It!</p>
            </header>
            <AddStop/>
        </React.Fragment>
    );
};

export default App;
