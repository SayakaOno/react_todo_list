import React from 'react';

class TodoItem extends React.Component {
  state = { completed: true };

  render() {
    const {text, completed} = this.props.item;
    
    return (
      <div className="item">
        <div className="content">
          <div className="header ui checkbox">
            <input type="checkbox" checked={this.state.completed}/>
            <label htmlFor="">{text}</label>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;