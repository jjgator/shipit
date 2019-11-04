import React from 'react';
import { connect } from "react-redux";
import { addStop } from '../../actions/stops';
import { validateAddressField, validateNameField } from '../../helpers';
import './AddStop.scss';

class AddStop extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.resetState();
    }

    resetState = () => {
        return {
            name: '',
            address: ''
        };
    };

    handleChange = (field, value) => {
        this.setState({[field]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        if (this.isFormValid()) {
            this.props.addStop(this.state.name, this.state.address);
            this.setState({ ...this.resetState() });
        }
    };

    isFormValid = () => {
        let { name, address } = this.state;

        return validateNameField(name) && validateAddressField(address) ? true : false;
    };

    render() {
        let { name, address } = this.state;

        return(
            <div className="add-stop">
                <form className="add-stop-form" onSubmit={this.handleSubmit}>
                    <label className="form-label">
                        Name:
                        <input 
                            type="text" 
                            className="form-input"
                            value={name} 
                            onChange={e => this.handleChange('name', e.target.value)}/>
                    </label>
                    <label className="form-label">
                        Address:
                        <input 
                            type="text" 
                            className="form-input"
                            value={address}
                            onChange={e => this.handleChange('address', e.target.value)}/>
                    </label>
                    <button className="add-stop-button" type="submit">Add Stop</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addStop })(AddStop);