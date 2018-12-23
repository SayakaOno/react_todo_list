import React from 'react';

class TodoItem extends React.Component {

  render() {
    const {id, text, completed} = this.props.item;
    const completedStyle = {
      fontStyle: 'italic',
      color: "#cdcdcd",
      textDecoration: "line-through"
    }
    
    return (
      <div
        className="item todo-item" 
      >
        <div className="content">
          <div className="header ui checkbox">
            <input
              id={`item${id}`}
              onChange={() => this.props.onChange(id)}
              type="checkbox"
              checked={completed}
            />
            <label
              style={completed ? completedStyle : null}
            >
              {text}
            </label>
            <i className="fas fa-trash-alt" onClick={() => this.props.onClick(id)}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;