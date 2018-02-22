import React,{Component} from "react";
import {observer} from "mobx-react";
import {TodoView} from "./TodoView";

import {extendObservable} from "mobx";


class TodoList extends Component{

  constructor(props){
	 super(props);
    extendObservable(this,{
      store:this.props.store}
    );
   }
  render(){
    //const store=this.props.store;
    console.log("TodoList.render()");
    return (
      <div>{this.store.todos.map(
          (todo,idx)=>(<TodoView todo={todo} key={idx}/>)
          )
      }
      <button onClick={ this.onNewTodo }>New Todo</button>
      </div>
      );
  }
  onNewTodo=()=>{
    //const s =this.store;
    //s.addTodo(prompt('Enter a new todo task','coffee plz'));
    //this.store=s;
    this.props.addTodo(prompt('Enter a new todo task','coffee plz'));
    
  }
 }

export {TodoList};