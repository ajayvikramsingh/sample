import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newToDoItem: '',
      toDoList: ['a', 's']
    };
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onNewTodoItemChange = this.onNewTodoItemChange.bind(this);
  }

  onNewTodoItemChange(event){
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.newToDoItem = event.target.value;
    this.setState(newState);
  }

  onBtnClick(){
    let newState =JSON.parse(JSON.stringify (this.state));
    newState.toDoList.push(newState.newToDoItem);
    newState.newToDoItem = '';
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <h1>To Do</h1>
        <input type="text" name="newToDoItem" value={this.state.newToDoItem} onChange={this.onNewTodoItemChange} />
        <button onClick={this.onBtnClick}>Add</button>        
        <div>
          <ul>
            {this.state.toDoList.map((toDoItem, index) => {return <li>{toDoItem}</li>})}
          </ul>
        </div>
      </div>


    );
  }
}

export default App;
