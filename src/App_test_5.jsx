//                      Components API JSX (App_test_5.jsx)
// You can remove one comments block and then start 

import React from 'react';
import ReactDOM from 'react-dom';

/*
//              Set State
class App_test_5 extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
        this.setStateHeader = this.setStateHeader.bind(this);
    };
    setStateHeader(){
        var item = "Muhammad Allah Rakha";
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    }
    render(){
        return(
            <div>
                <button onClick = {this.setStateHeader}>Set State</button>
                <h1>State Array: {this.state.data}</h1>
            </div>
        );
    }
}
export default App_test_5
*/
/*
//              Force Update
class App_test_5 extends React.Component{
    constructor(){
        super();
        this.forceUpdateHeandler = this.forceUpdateHeandler.bind();
    };
    forceUpdateHeandler(){
        this.forceUpdate();
    }
    render(){
        return(
            <div>
                <button onClick = {this.forceUpdateHeandler}>Force Update</button>
                <h1>Random_Number: {Math.random()}</h1>
            </div>
        )
    }
}
export default App_test_5
*/

/*
//              Find Dom Node
class App_test_5 extends React.Component{
    constructor(){
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };
    findDomNodeHandler(){
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    };
    render(){
        return(
            <div>
                <button onClick = {this.findDomNodeHandler}>Find Dom</button>
                <div id="myDiv">
                    Muhammad Allah Rakha
                </div>
            </div>

        );
    };
}
export default App_test_5
*/