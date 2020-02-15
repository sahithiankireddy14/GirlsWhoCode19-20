import React from "react";
import {Button, Jumbotron} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class Jumbo extends React.Component{
    constructor(props){
      // calls default const
      super(props);
      this.state={
        redirect:false,
        link:'/'
      }
      // binds to overall component
      this.link=this.link.bind(this)
        // call default constructor
        
    }
    render(){

        return (
        <div><Jumbotron fluid="true">
        <h1>NearYou</h1>
        <p>
          Find the nearest rest stops, gas stations, lodging and activties on the road! 
        </p>
        <p>
          <Button variant="primary" onClick={()=>this.link('/maps')}>Go To Maps</Button>
        </p>
      </Jumbotron> {this.Redirect()}</div>)
    }
// constanlty checks and when variable turns true (you click on button), the page redirects to whatever
    Redirect(){
      if(this.state.redirect){
        return <Redirect to ={this.state.link}/>
      }


    }

    link(link){
      this.setState({link,redirect:true})
    }


    
    

}
export default Jumbo;