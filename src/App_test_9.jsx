//                  Refs(Reference) JSX (App_test_9.jsx)
import React from 'react';
import ReactDOM from 'react-dom';

class App_test_9 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: ''
        };
        this.updateState = this.updateState.bind(this);
        this.clearState = this.clearState.bind(this);
    }
    updateState(e){
        this.setState({data: e.target.value});
    }
    clearState(){
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput);
    }
    render(){
        return(
            <div>
                <input type="text" name="text" value={this.state.data}
                onChange = {this.updateState} refs = "myInput"/>
                <button onClick = {this.clearState}>Clear</button>
                <h1>{this.state.data}</h1>
            </div>
        );
    }
}
export default App_test_9