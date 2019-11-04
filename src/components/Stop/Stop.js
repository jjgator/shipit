import React from 'react';
import { connect } from "react-redux";
import { toggleCompleted, removeStop, editStop } from '../../actions/stops';
import { validateString, isNotEmptyString } from '../../helpers';
import './Stop.scss';

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
            <React.Fragment>
                {isActive 
                ? <form className="edit-stop-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        className="name-input"
                        value={nameInputValue}
                        onChange={
                            e => this.handleChange('nameInputValue', e.target.value)
                        }/>
                    <input 
                        type="text" 
                        className="address-input"
                        value={addressInputValue}
                        onChange={
                            e => this.handleChange('addressInputValue', e.target.value)
                        }/>
                    <button className="save-stop-button" type="submit">Save</button>
                </form>
                : <div>
                    {isValidating 
                    ? <div className="stop-wrapper">...validating</div>
                    : <div className="stop-wrapper">
                        <div className="stop-text" onClick={this.showForm}>
                            <span className="stop-name">{name}</span>
                            <span className="stop-address">{address}</span>
                        </div>
                        <input 
                            type="checkbox"
                            className="stop-completed"
                            checked={completed}
                            onChange={() => toggleCompleted(id)}>
                        </input>
                        <button className="delete-stop-button" onClick={() => removeStop(id)}>Remove</button>
                    </div>}
                </div>}
            </React.Fragment>
        );
    }
}

export default connect(null, { toggleCompleted, removeStop, editStop })(Stop);