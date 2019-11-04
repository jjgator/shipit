import React from 'react';
import { connect } from "react-redux";
import { toggleCompleted, removeStop, editStop } from '../../actions/stops';
import { validateString, isNotEmptyString } from '../../helpers';

class Stop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            isValidating: false,
            nameInputValue: '',
            addressInputValue: ''
        };
    }

    showForm = () => {
        this.setState({ 
            nameInputValue: this.props.name, 
            addressInputValue: this.props.address, 
            isActive: true 
        });
    };

    handleChange = (field, value) => {
        this.setState({ [field]: value });
    };

    handleSubmit = (e)  => {
        e.preventDefault();
        let { id } = this.props;
        let name = this.state.nameInputValue;
        let address = this.state.addressInputValue;

        if (this.isFormValid()) {
            this.setState({ isActive: false, isValidating: true });
            this.props.editStop(id, name, address);
        }
    };

    isFormValid = () => {
        let name = this.state.nameInputValue;
        let address = this.state.addressInputValue;

        return isNotEmptyString(name) && validateString(address) ? true : false;
    };

    render() {
        let { isActive, nameInputValue, addressInputValue } = this.state;
        let { 
            name, 
            address, 
            completed, 
            id, 
            toggleCompleted, 
            removeStop,
            isValidating
        } = this.props;

        return(
            <div className="stop-wrapper">
                {isActive 
                    ? <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={nameInputValue}
                            onChange={
                                e => this.handleChange('nameInputValue', e.target.value)
                            }/>
                        <input 
                            type="text" 
                            value={addressInputValue}
                            onChange={
                                e => this.handleChange('addressInputValue', e.target.value)
                            }/>
                        <input type="submit" value="Save"/>
                    </form>
                    : <span onClick={this.showForm}>
                        {isValidating ? '...validating' : `${name}: ${address}`}</span>}
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={() => toggleCompleted(id)}>
                </input>
                <button onClick={() => removeStop(id)}>X</button>
            </div>
        );
    }
}

export default connect(null, { toggleCompleted, removeStop, editStop })(Stop);