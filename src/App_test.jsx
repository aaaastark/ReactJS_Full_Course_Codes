//                      Java Script Expression (JSX) App_test.jsx
import React from 'react';

class App_test extends React.Component{
    render(){
        let hassan = 1;

        let myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return (
            <div>
                {/* HTML acces in JSX file */}
                <h1>AAAA STARK</h1>
                <h2>Founder and CEO (AAAA STARK INDUSTRY)</h2>
                <p>Muhammad Allah Rakha</p>

                {/* Attributes pass method */}
                <p data_attribute = "some name">HASSAN</p>

                {/* number pass through JSX javascript expression method */}
                <h1>{4444}</h1>

                {/* if else condition use here now. */}
                <h1> {hassan === 1 ? "Hassan Don" : "Don Hassan"} </h1>

                {/* Styling passing through JSX method */}
                <h1 style = {myStyle}>Don John Rakha</h1>
            </div>
        )
    }
}
export default App_test