//              Transition JSX (App_test_13.jsx)
import React from 'react'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App_test_13 extends React.Component{
    render(){
        return(
            <div>
                <ReactCSSTransitionGroup transitionName = "example"
                    transitionAppear = {true} transitionAppearTimeout = {500} transitionEnter = {false} transitionLeave = {false}>
                    <h1>My Element...</h1>

                </ReactCSSTransitionGroup>
            </div>
        )
    }
}
export default App_test_13