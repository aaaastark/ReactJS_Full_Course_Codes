//                  Router JSX (App_test_11.jsx)
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

class App_test_11 extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contect</li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App_test_11;

export class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Home---</h1>
            </div>
        )
    }
}


export class About extends React.Component{
    render(){
        return(
            <div>
                <h1>About---</h1>
            </div>
        )
    }
}

export class Contect extends React.Component{
    render(){
        return(
            <div>
                <h1 Contect---></h1>
            </div>
        )
    }
}
ReactDOM.render(
  (
    <Router history = {browserHistory}>
    <Route path ="/" component = {App_test_11}>
      <IndexRoute component = {Home}/>
      <Route path = "home" component = {Home}/>
      <Route path = "about" component = {About}/>
      <Route path = "contect" component = {Contect}/>
    </Route>
    </Router>
  ),document.getElementById('root')
  
  
  
  
  
);

