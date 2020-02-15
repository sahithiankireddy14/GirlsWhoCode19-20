import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Jumbo from './jumbotron.js';
import Cards from './cards.js';
import Maps from './maps.js';


class App extends React.Component{
    constructor(props){
        // call default constructor
        super(props);
    }

    render(){
        // returns html components
        return (
           
			<div>
				<Router>
				
				<Switch>
					<Route exact path='/'component={Jumbo}/>
					<Route path="/maps" component={Maps}/>
						
			 	</Switch> 
			</Router>
			 </div>
				
		)
}
}
export default App;



			/* // 	<Switch>
			// 		// <Route path='/home' component={Project}/>
			// 		// <Route path='/sandbox' component={Sandbox}/>
			// 		// <Route path='/backlog' component={Backlog}/>
			// 		// <Route path='/sprints' component={Sprint}/>
			// 	</Switch> */