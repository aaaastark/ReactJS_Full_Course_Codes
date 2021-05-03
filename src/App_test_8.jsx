//              Events JSX(App_test_8.jsx)                  
import React from 'react';

/*
//              Simple Example
class App_test_8 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: "Muhammad Allah Rakha (AAAA STARK)"
        };
        this.updataState = this.updataState.bind(this);
    };
    updataState(){
        this.setState({data: "Welcome Mr.AAAA STARK"})
    };
    render(){
        return(
            <div>
                <button onClick = {this.updataState}>Click</button>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}
export default App_test_8
*/


/*
//              Complex Example 
class App_test_8 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: "Muhammad Allah Rakha (AAAA STARK)"
        };
        this.updataState = this.updataState.bind(this);
    };
    updataState(){
        this.setState({data: "Welcome Mr.AAAA STARK"})
    };
    render(){
        return(
            <div>
                <Content updataState_new = {this.state.updataState} data_new = {this.state.data} />
            </div>
        )
    }
}
class Content extends React.Component{
    render(){
        return(
            <div>
                <button onClick = {this.props.updataState_new}>Click</button>
                <h1>{this.props.data_new}</h1>
            </div>
        )
    }
}
export default App_test_8
*/