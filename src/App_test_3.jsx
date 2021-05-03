//          Props Overview JSX (App_test_3.jsx)
// You can remove one comments block and then start 
import React from 'react';

/*
//              Using props
class App_test_3 extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}
export default App_test_3
*/



/*
//                Default Props
class App_test_3 extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}
App_test_3.defaultProps = {
    name: "AAAA STARK",
    age: 23
}
export default App_test_3
*/

/*
//              State and Props
class App_test_3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Muhammd Allah Rakha",
            age: 23
        }
    }
    render(){
        return(
            <div>
                <YourName names = {this.state.name}/>
                <YourAge age = {this.state.age}/>
            </div>
        )
    }
}
class YourName extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.names}</h1>
            </div>
        )
    }
}
class YourAge extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.age}</h1>
            </div>
        )
    }
}
export default App_test_3
*/