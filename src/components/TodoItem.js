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
      <div className="item">
        <div className="content">
          <div className="header ui checkbox">
            <input id={`item${id}`} onChange={() => this.props.onChange(id)} type="checkbox" checked={completed}/>
            <label style={completed ? completedStyle : null} htmlFor={`item${id}`}>{text}</label>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;