import React, { Component } from 'react';
import './App.css';

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
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                    <tbody>
                        {
                            this.props.toDoList.map((toDoItem, index) => {
                                return (<tr>
                                    <td>{toDoItem.title}</td>
                                    <td><button onClick={() => this.props.onDoneClick(index)}>{toDoItem.isDone ? 'Undo' : 'Done'}</button></td>
                                    <td><button onClick={() => { this.props.onEditClick(index) }}>edit</button></td>
                                    <td><button onClick={() => { this.props.onRemoveClick(index) }}>remove</button></td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default toDoList;