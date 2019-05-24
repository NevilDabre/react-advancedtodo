import React, { Component } from 'react'
import TodoItem from './todoItem.controller'
import AddTodoItem from './addtodoItem.controller'
const todos = [{
    "id":1,
    "name": "Milk",
    "isCompleted": false,
    "due": "NA"
}, {
    "id":2,
    "name": "Sugar",
    "isCompleted": false,
    "due": "NA"
}, {
    "id":3,
    "name": "Bread",
    "isCompleted": false,
    "due": "NA"
}]

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            todos: todos,
            existWarning: false
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

    handleClick(name, date){
        if(name && name !== ''){
            this.setState(prevState=>{
                let existingTodo = prevState.todos.filter(todo=>{
                    return todo.name.toLowerCase() === name.toLowerCase() && todo.due === date
                })
                if(existingTodo.length>0){
                    return { existWarning : true}
                }else{
    
                    let newTodo = {
                        id: prevState.todos.reduce((max,t)=> t.id > max ? t.id: max, prevState.todos[0].id) + 1,
                        name: name,
                        isCompleted: false,
                        due: date
                    }
                    prevState.todos.push(newTodo)
                    prevState.existWarning = false
                    return prevState
                }
            })
        }
    }

    render() {
        const todoItems = this.state.todos.map(todo=>{
            return <TodoItem handleChange={this.handleChange} key={todo.id} data={todo} />
        })
        return (
            <div>
                <h1>Todo List</h1>
                <AddTodoItem existWarning={this.state.existWarning} handleOnClick={this.handleClick}/>
                {todoItems}
            </div>
        )
    }
}

export default Todo 