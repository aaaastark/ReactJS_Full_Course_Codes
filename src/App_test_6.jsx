//                  Component Life Cycle JSX(App-test_6)
import React from 'react';

class App_test_6 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        this.setNewNumber = this.setNewNumber.bind(this);
    };
    setNewNumber(){
        this.setState({data: this.state.data + Math.random()})
    };
    render(){
        return(
            <div>
                <button onClick = {this.setNewNumber}>Increment</button>
                <Content myNumber = {this.state.data}/>
            </div>

        );
    };
}
class Content extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
export default App_test_6