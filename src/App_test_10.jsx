//                  Keys JSX (App_test_10.jsx)

import React from 'react';

class App_test_10 extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [
                {
                    name: "Muhammad Allah Rakha",
                    age: 22
                },
                {
                    name: "Hashim Raza",
                    age: 24
                },
                {
                    name: "Jahangir Akhter",
                    age: 58
                },
                {
                    name: "Kausor Perween",
                    age: 57
                }
            ]
        };
    };
    render(){
        return(
            <div>
                <div>
                    {this.state.data.map((daynamic_name,daynamic_key)   => <Content key = {daynamic_key} name_type = {daynamic_name}/>)}
                </div>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <div>
                    {this.props.name_type.name}
                </div>
                <div>
                    {this.props.name_type.age}
                </div>
            </div>
        )
    }
}

export default App_test_10