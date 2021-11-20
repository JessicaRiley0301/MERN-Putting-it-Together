import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            myPerson : this.props.person
        }
    }
    render() {
        return (
        <>
        <div>This is our first class component.
            <p>{this.state.myPerson.name}</p>
            <button>increase {this.state.myPerson.name}'s age + 1</button>
        </div>
        </>
        )
    }
}
    
export default SomeClassComponent;
