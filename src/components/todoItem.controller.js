import React, { Component } from 'react'

class TodoItem extends Component{
    render(){
        const className = this.props.data.isCompleted?"completed": "incomplete";
        return(
            <div>
                <label className={className}>
                    <input type="checkbox" value={this.props.data.isCompleted} onChange={()=> this.props.handleChange(this.props.data.id)} />
                    {this.props.data.name} {className}
                </label>
            </div>
        )
    }
}

export default TodoItem