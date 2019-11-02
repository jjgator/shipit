import React from 'react';
import { connect } from "react-redux";
import { addStop } from '../../actions/index';

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
            this.props.dispatch(addStop(this.state.name, this.state.address));
            this.setState({...this.resetState()});
        }
    };

    isFormValid = () => {
        return (!this.state.name || !this.state.address) 
            ? alert("All fields are required. Please try again.")
            : true
    };

    render() {
        let { name, address } = this.state;
        console.log(this.props)
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

const mapStateToProps = (state) => ({
    stops: state.stops
})

export default connect(mapStateToProps)(AddStop)