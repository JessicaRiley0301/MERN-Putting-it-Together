import React, { Component } from 'react';
    
    
class PropsComponent extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        
    }
    render() {
        return (
            <div>
                <p> this is props component</p>
                <p> {this.props.message}</p>
            </div>
        )
    }
    
}
    
export default PropsComponent;
