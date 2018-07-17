import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';

const getInitialToDoItem = () => ({
  title: '',
  isDone: false,
  createdOn: new Date(),
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDoItem: getInitialToDoItem(),
      toDoList: [],
      isEditMode: false,
      editItemIndex: -1,
      isDoneItemIndex:-1,
      isDone:false,
    };
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
    this.onUpdateBtnClick = this.onUpdateBtnClick.bind(this);
    this.onNewTodoItemChange = this.onNewTodoItemChange.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDoneClick=this.onDoneClick.bind(this);
    this.onUndoCLick=this.onUndoCLick.bind(this);
    }

  onNewTodoItemChange(event) {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.newToDoItem.title = event.target.value;
    this.setState(newState);
  }

  onAddBtnClick() {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.toDoList.push(newState.newToDoItem);
    newState.newToDoItem = getInitialToDoItem();
    this.setState(newState);
  }

  onUpdateBtnClick() {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.toDoList.splice(newState.editItemIndex, 1, newState.newToDoItem);
    newState.editItemIndex = -1,
    newState.isEditMode = false;
    newState.newToDoItem = getInitialToDoItem();
    this.setState(newState);
  }

  onRemoveClick(index) {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.toDoList.splice(index, 1);
    this.setState(newState);
  }
  onDoneClick(index)
  {
    let newState=JSON.parse(JSON.stringify(this.state));
    newState.toDoList[index].isDone = true;
    this.setState(newState);    
  }
  onUndoCLick(index){
  let newState=JSON.parse(JSON.stringify(this.state));
  newState.toDoList[index].isDone=false;
  this.setState(newState);
  }
  onEditClick(index) {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.newToDoItem = newState.toDoList[index];
    newState.toDoList[index] = newState.newToDoItem;
    newState.isEditMode = true;
    newState.editItemIndex = index;
    this.setState(newState);
  }


  render() {
    return (

      <div className="App">
        <h1 >To Do</h1>
        {this.state.isEditMode 
          ? 
          <div>
            <input type="text" name="newToDoItem" value={this.state.newToDoItem.title} onChange={this.onNewTodoItemChange} />
            <button disabled={this.state.newToDoItem === ''} onClick={this.onUpdateBtnClick}>Update</button>
          </div> 
          :
          <div> 
            <input type="text" name="newToDoItem" value={this.state.newToDoItem.title} onChange={this.onNewTodoItemChange} />
            <button disabled={this.state.newToDoItem === ''} onClick={this.onAddBtnClick}>Add</button>
          </div>
        }

        <ToDoList toDoList={this.state.toDoList} onEditClick={this.onEditClick} 
        onRemoveClick={this.onRemoveClick} onDoneClick={this.onDoneClick} onUndoClick={this.onUndoClick}/>

      </div>


    );
  }
}

export default App;
