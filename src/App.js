import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newToDoItem: '',
      toDoList: [],
      isEditMode: false,
      editItemIndex: -1,
    };
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.onNewTodoItemChange = this.onNewTodoItemChange.bind(this);
    this.onRemoveClick=this.onRemoveClick.bind(this);
    this.onEditClick=this.onEditClick.bind(this);
  }

  onNewTodoItemChange(event){
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.newToDoItem = event.target.value;
    this.setState(newState);
  }

  onAddBtnClick(){
    let newState =JSON.parse(JSON.stringify (this.state));
    if(this.state.isEditMode){
      newState.toDoList.splice(newState.editItemIndex, 1, newState.newToDoItem);
      newState.editItemIndex = -1,
      newState.isEditMode = false;      
    } else {
      newState.toDoList.push(newState.newToDoItem);
    }
    newState.newToDoItem = '';
    this.setState(newState);
  }
  onRemoveClick(index)
  {
    let newState=JSON.parse(JSON.stringify(this.state));
    newState.toDoList.splice(index, 1);
    this.setState(newState);
  }
  onEditClick(index)
  {
    let newState=JSON.parse(JSON.stringify(this.state));
    newState.newToDoItem=newState.toDoList[index];
    newState.toDoList[index]=newState.newToDoItem;
    newState.isEditMode = true;
    newState.editItemIndex = index;
    this.setState(newState);
  }


   render() {
    return (

<div className="App">
        <h1 >To Do</h1>
        <input type="text" name="newToDoItem" value={this.state.newToDoItem} onChange={this.onNewTodoItemChange} />
        <button disabled={this.state.newToDoItem === ''} onClick={this.onAddBtnClick}>{this.state.isEditMode ? 'UPDATE' : 'ADD'}</button>        
        <div>
          <ol>
            {this.state.toDoList.map((toDoItem, index) => 
              {return <li key={index}>{toDoItem}<button onClick={()=>{this.onRemoveClick(index)}}>remove</button>
              <button onClick={()=>{this.onEditClick(index)}}>edit</button></li>})}
          </ol>
        </div>
      </div>


    );
  }
}

export default App;
