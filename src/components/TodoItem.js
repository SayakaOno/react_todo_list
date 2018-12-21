import React from 'react';

class TodoItem extends React.Component {

  render() {
    const {id, text, completed} = this.props.item;
    
    return (
      <div className="item">
        <div className="content">
          <div className="header ui checkbox">
            <input onChange={() => this.props.onChange(id)} type="checkbox" checked={completed}/>
            <label htmlFor="">{text}</label>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;