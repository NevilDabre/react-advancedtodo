import React, { Component } from 'react'

class AddTodoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            taskName:'',
            taskDate:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const { name, value } = event.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div>
                    <input name="taskName" value={this.state.taskName} onChange={this.handleChange} type="text" /> 

                    <input type="date" name="taskDate" value={this.state.taskDate} onChange={this.handleChange} />

                    <button onClick={()=> this.props.handleOnClick(this.state.taskName, this.state.taskDate)}>Add Task</button>
                    <br />
                    { this.props.existWarning && <h3 className="error-text">Error: Todo Task Already Exist.</h3> }
                    
            </div>
        )
    }
}

export default AddTodoItem