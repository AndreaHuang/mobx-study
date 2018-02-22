import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {TodoStore} from './model/TodoStore';
import {ObservableTodoStore} from './model/ObservableTodoStore';
import {observer} from "mobx-react";
import {TodoList} from './component/TodoList';



class App extends Component {
  render() {
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


    var todoStore = new ObservableTodoStore();
    todoStore.addTodo("task1");
    todoStore.addTodo("task2");
    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList store={todoStore}/>
      </div>
    );
  }
}

export default observer(App);
