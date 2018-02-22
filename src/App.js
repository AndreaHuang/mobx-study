import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {TodoStore} from './model/TodoStore';
import {ObservableTodoStore} from './model/ObservableTodoStore';
import {observer} from "mobx-react";
import {extendObservable,observable} from "mobx";
import {TodoList} from './component/TodoList.js';



class App extends Component {
  constructor(props){
    super(props);
   //this.todoStore = new ObservableTodoStore();
   extendObservable(this,{
    todoStore: new ObservableTodoStore(),
    count:0
   })
   
    this.todoStore.addTodo("task1");
    this.todoStore.addTodo("task2");
  }

  addTodo=(task)=>{
    console.log("before",this.todoStore);
    const store = this.todoStore;
    store.addTodo(task);
    this.todoStore = store;
    console.log("after",this.todoStore);
    this.count++;
  }
  increase=()=>{
    this.count++;
  }

  render() {
    console.log("App.render()");
    /*var todoStore = new TodoStore();
    todoStore.addTodo("task1");
    console.log(todoStore.report());
    todoStore.addTodo("task2");
    console.log(todoStore.report());
    todoStore.todos[0].completed=true;
    console.log(todoStore.report());
    todoStore.todos[1].task="updated task2";
    console.log(todoStore.report());
    todoStore.todos[0].task="updated task1";
    console.log(todoStore.report());*/


   /* var todoStore = new ObservableTodoStore();
    todoStore.addTodo("task1");
    todoStore.addTodo("task2");
    */

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList store={this.todoStore} addTodo={this.addTodo}/>
        <button onClick={this.increase}>Increase</button>
        <span>{this.count}</span>
      </div>
    );
  }
}

export default observer(App);
