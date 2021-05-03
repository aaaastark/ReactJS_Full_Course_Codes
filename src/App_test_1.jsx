//                  Components JSX (App_test_1.jsx)
import React from 'react';

class App_test_1 extends React.Component{
    constructor(){
        super();
        this.state = {
            data:
            [
                {
                    "id": 1,
                    "name": "Muhammad Allah Rakha",
                    "age": "21"
                },
                {
                    "id": 2,
                    "name": "Hassan Raza",
                    "age": "22"
                },
                {
                    "id": 3,
                    "name": "Hashim Raza",
                    "age": "23"
                }
            ]
        }
    }
    render(){
        return (
            <div>
                hassan rakha hashim
                <Header/>
                <Content/>
                <table>
                    <tbody>
                        {this.state.data.map((person,i) => <TableRow key = {i} data = {person}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>
                    Header Muhammad Allah Rakha
                </h1>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return (
            <div>
                <h2>
                    Content
                </h2>
                <p>The Content text !!</p>
            </div>
        );
    }
}
class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td> {this.props.data.id} </td>
                <td> {this.props.data.name} </td>
                <td> {this.props.data.age} </td>
            </tr>
        );
    }
}
export default App_test_1