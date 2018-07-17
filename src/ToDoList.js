import React, { Component } from 'react';

const toDoItemStyle = {
    textDecoration: 'line-through',
}

class toDoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ol>
                    {this.props.toDoList.map((toDoItem, index) => {
                        return <li key={index}>
                                    <div style={toDoItem.isDone ? toDoItemStyle : null}>{toDoItem.title}</div>
                                    <button onClick={() => { this.props.onRemoveClick(index) }}>remove</button>                                    
                                    <button onClick={() => { this.props.onEditClick(index) }}>edit</button>
                                    <button onClick={() => this.props.onDoneClick(index)}>{toDoItem.isDone ? 'Undo' : 'Done'}</button>
                                </li>
                    })}
                </ol>
            </div>
        );
    }
}

export default toDoList;