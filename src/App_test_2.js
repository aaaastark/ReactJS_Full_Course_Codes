//               States JSX or JS (App_tes_2.js)
import React from 'react';

class App_test_2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: "ammi",
            footer: "abbo"
        }
    }
    render(){
        return(
            <div>
                <h1>Muhammad Allah Rakha</h1>
                <h2>{this.state.header}</h2>
                <h2>{this.state.footer}</h2>
            </div>

        )
    }
}

export default App_test_2