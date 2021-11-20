import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            incAge: this.props.age
        };
    }
    
    addYear() {
        console.log("add one year");
        this.setState({
            ...this.state,
            incAge: this.state.incAge + 1
        })
    }
        
    
    render() {
        return (
            <div>
            <h1>{this.props.lastName} , {this.props.firstName}</h1>
            <p>Age: {this.state.incAge}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={() => this.addYear()}>Birthday Button for {this.props.firstName} {this.props.lastName} </button>

            </div>
        )
    }
}
export default PersonCard;
