//              Using The Flux JSX(App_test_12.jsx)
//  Actions, Componets, Reducers (use here in this file purpose.)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './Actions/actions'
import AddTodo from './Componets/AddTodo.js'
import TodoList from './Componets/TodoList.js'

class App_test_12 extends Component{
    render(){
        const { dispatch, visibleTodos } = this.props

        return(
            <div>
                <AddTodo onAddClick = {text => dispatch(addTodo(text))}/>
                <TodoList todos = {visibleTodos}/>

            </div>
        )
    }
}
function select(state){
    return{
        visibleTodos: state.todos
    }
}

export default connect(select)(App_test_12);