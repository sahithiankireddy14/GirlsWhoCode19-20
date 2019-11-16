import React from "react";
import {Button, Jumbotron} from 'react-bootstrap';

class Jumbo extends React.Component{
    constructor(props){
        // call default constructor
        super(props);
    }
    render(){
        return (
        <Jumbotron fluid>
        <h1>NearYou</h1>
        <p>
          Find the nearest rest stops, gas stations, lodging and activties on the road! 
        </p>
        <p>
          <Button variant="primary" onclick>Go To Maps</Button>
        </p>
      </Jumbotron>)
    }
    
    

}
export default Jumbo;