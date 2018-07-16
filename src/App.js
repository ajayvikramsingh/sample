import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newToDoItem: '',
      toDoList: [],           
    };
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onNewTodoItemChange = this.onNewTodoItemChange.bind(this);
    this.onRemoveclick=this.onRemoveclick.bind(this);
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
  onRemoveclick(index)
  {
    let newState=JSON.parse(JSON.stringify(this.state));
    newState.toDoList.splice(index, 1);
    this.setState(newState);
  }

  render() {
    return (

<div className="App">
        <h1 >To Do</h1>
        <input type="text" name="newToDoItem" value={this.state.newToDoItem} onChange={this.onNewTodoItemChange} />
        <button onClick={this.onBtnClick}>Add</button>        
        <div>
          <ol>
            {this.state.toDoList.map((toDoItem, index) => {return <li key={index}>{toDoItem}<button onClick={()=>{this.onRemoveclick(index)}}>remove</button></li>} )}
          </ol>
        </div>
      </div>


    );
  }
}

export default App;
