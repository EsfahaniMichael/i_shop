import React, { Component } from 'react';
import axios from 'axios';


class Test extends Component {
    async componentDidMount(){
        const resp = await axios.get('/api/test');

        console.log("test response:", resp)
    }
    render(){
        console.log('hi')
        return(
            <h1>TEST COMPONENT</h1>
        )
    }
}


export default Test;