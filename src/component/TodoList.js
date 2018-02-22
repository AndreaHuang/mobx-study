import React,{Component} from "react";
import {observer} from "mobx-react";
import {TodoView} from "./TodoView";




class TodoList extends Component{

  constructor(props){
	super(props);
   }
  render(){
    const store=this.props.store;
    return (
      <div>{store.todos.map(
          (todo,idx)=>(<TodoView todo={todo} key={idx}/>)
          )
      }
      </div>
      );
  }
  onNewTodo=()=>{
    this.props.store.addTodo(prompt('Enter a new todo task','coffee plz'));
  }
 }


export {TodoList};