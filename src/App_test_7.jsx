//                  Forms JSX (App_test_7.jsx)
// You can remove one comments block and then start 

import React from 'react';

/*
//          Simple Example
class App_test_7 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: "Muhammad Allah Rakha"
        };
        this.updateState = this.updateState.bind(this);
    };
    updateState(e){
        this.setState({data: e.target.value});
    }
    render(){
        return(
            <div>
                <input type="text" name="text" value={this.state.data} onChange = {this.updateState}/>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}
export default App_test_7
*/



/*
//          Complex Example
class App_test_7 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: "Muhammad Allah Rakha"
        };
        this.updateState = this.updateState.bind(this);
    };
    updateState(e){
        this.setState({data: e.target.value});
    }
    render(){
        return(
            <div>
                <Content myDate = {this.state.data} updateState_Access = {this.updateState}/>
            </div>
        )
    }
}
class Content extends React.Component{
    render(){
        return(
            <div>
                <input type="text" name="text" value={this.props.myDate} onChange = {this.props.updateState_Access}/>
                <h1>{this.props.myDate}</h1>
            </div>
        )
    }
}
export default App_test_7
*/