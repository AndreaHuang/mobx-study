import React,{Component} from "react";

import {extendObservable,observable} from "mobx";
class TodoView extends Component {
  constructor(props){
    super(props);
    extendObservable(this,{
    todo: this.props.todo,
    count:0
   })
  }
  render() {
    
    return (
      <li onDoubleClick={ this.onRename }>
        <input
          type='checkbox'
          checked={ this.todo.completed }
          onChange={ this.onToggleCompleted } />
  		   
          { this.todo.task }
          { this.todo.assignee
          ? <small>{ this.todo.assignee.name }</small>
          : null
        }
        {this.count}

      </li>
    );
  }

  onToggleCompleted = () => {
    console.log("onToggleCompleted",this.todo.completed );
    const todo = this.todo;
    todo.completed = !todo.completed;
    this.todo=todo;
    this.count++;
    console.log(this.count);
  }

  onRename = () => {
    const todo = this.props.todo;
    todo.task = prompt('Task name', todo.task) || todo.task;
  }
}

export {TodoView};