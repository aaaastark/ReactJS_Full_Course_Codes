//                  Props Validataion JSX (App_test_4.jsx)
import React from 'react';

class App_test_4 extends React.Component{
    render(){
        return(
            <div>
                <h1>Array_Name: {this.props.Array_Number_Change}</h1>
                <h1>Bool_Type: {this.props.bool_type ? "True":"False"}</h1>
                <h1>Function_Type: {this.props.function_types(5)}</h1>
                <h1>Number_Integer: {this.props.number}</h1>
                <h1>Name_String: {this.props.name}</h1>
                <h1>Object_Type1: {this.props.object_type.type1}</h1>
                <h1>Object_Type2: {this.props.object_type.type2}</h1>
                <h1>Object_Type3: {this.props.object_type.type3}</h1>
            </div>
        )
    }
}

App_test_4.propTypes = {
    Array_Number_Change: React.PropTypes.array.isRequired,
    bool_type: React.PropTypes.bool.isRequired,
    function_types: React.PropTypes.func,
    number: React.PropTypes.number,
    name: React.PropTypes.string,
    object_type: React.PropTypes.object
}

App_test_4.defaultProps = {
    Array_Number_Change: [1,2,3,4,5,6],
    bool_type: true,
    function_types: function(e){return (e)},
    number: 4444,
    name: "AAAASTARK",
    object_type: {
        type1: "Don John",
        type2: "Don Rakha",
        type3: "Don Hassan"
    }
}

export default App_test_4