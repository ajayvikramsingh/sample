import React, { Component } from 'react';

class ToDoLiist extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ol>
                    {this.props.toDoList.map((toDoItem, index) => {
                        return <li key={index}>{toDoItem}<button onClick={() => { this.props.onRemoveClick(index) }}>remove</button>
                            <button onClick={() => { this.props.onEditClick(index) }}>edit</button></li>
                    })}
                </ol>
            </div>
        );
    }
}

export default ToDoLiist;