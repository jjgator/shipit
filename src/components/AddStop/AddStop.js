import React from 'react';
import { connect } from "react-redux";
import { addStop } from '../../actions/stops';
import { validateString, isNotEmptyString } from '../../helpers';

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
            this.setState({...this.resetState()});
        }
    };

    isFormValid = () => {
        let { name, address } = this.state;

        return isNotEmptyString(name) && validateString(address) ? true : false;
    };

    render() {
        let { name, address } = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={e => this.handleChange('name', e.target.value)}/>
                </label>
                <label>
                    Address:
                    <input 
                        type="text" 
                        value={address}
                        onChange={e => this.handleChange('address', e.target.value)}/>
                </label>
                <input type="submit" value="Add Stop" />
            </form>
        );
    }
}

export default connect(null, { addStop })(AddStop);