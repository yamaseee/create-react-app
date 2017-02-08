import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './component/todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [
        {id: 1, name: 'Learn JSX', isComplete: true},
        {id: 2, name: 'BUILd app', isComplete: false},
        {id: 3, name: 'ship it',   isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange (evt) {
      this.setState({
        currentTodo: evt.target.value
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React TODOs </h2>
        </div>
        <div className="Todo_App">
        <TodoForm handleInputChange={this.handleInputChange}
          currentTodo={this.state.currentTodo}/>
        </div>
        <TodoList todos={this.state.todos}/>


      </div>
    );
  }
}

export default App;
