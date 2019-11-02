import React from 'react';

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
        console.log(this.state.name, this.state.address);
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
                    <input type="text" 
                    value={address}
                    onChange={e => this.handleChange('address', e.target.value)}/>
                </label>
                <input type="submit" value="Add Stop" />
            </form>
        );
    }
}

export default AddStop;