import React,{Component} from "react"

class TodoView extends Component {
  render() {
    const todo = this.props.todo;
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ todo.completed }
          onChange={ this.onToggleCompleted } />
  		   
          { todo.task }
          { todo.assignee
          ? <small>{ todo.assignee.name }</small>
          : null
        }

      </li>
    );
  }

  onToggleCompleted = () => {
    console.log("onToggleCompleted",this.props.todo.completed );
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}

export {TodoView};