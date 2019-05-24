import React, { Component } from 'react'
import TodoItem from './todoItem.controller'
const todos = [{
    "id":1,
    "name": "Milk",
    "isCompleted": false
}, {
    "id":2,
    "name": "Sugar",
    "isCompleted": false
}, {
    "id":3,
    "name": "Bread",
    "isCompleted": false
}]

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            todos: todos
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(id){
         this.setState(prevState=>{
            let updatedTodos = prevState.todos.map(todo=>{
                if(todo.id === id){
                    todo.isCompleted = !todo.isCompleted
                }
                return todo
            })
            return updatedTodos
        })
    }

    handleClick(value){
        console.log(value)
    }

    render() {
        const todoItems = this.state.todos.map(todo=>{
            return <TodoItem handleChange={this.handleChange} key={todo.id} data={todo} />
        })
        return (
            <div>
                <h1>Todo List</h1>
                <addTodoItem handleClick={this.handleClick}/>
                {todoItems}
            </div>
        )
    }
}

export default Todo 