import React from 'react';

class TodoItem extends React.Component {
  state = { editable: false }

  onLabelClick = (e) => {
    if (e.target.tagName !== 'LABEL') {return;}
    this.setState({ editable: true });
  };

  onInputChange = (e, id) => {
    let text = e.target.value;
    this.props.onChange(e, id, text);
  }

  renderContent = (text, id) => {
    if (this.state.editable) {
      return (
        <input
          type="text"
          value={text}
          onChange={(e) => this.onInputChange(e, id)}
          onBlur = {() => this.setState({ editable: false })}
          autoFocus={true}
        />
      );
    } 
    return text;
  }

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
              onChange={(e) => this.props.onChange(e, id)}
              type="checkbox"
              checked={completed}
            />
            <label
              style={completed ? completedStyle : null}
              onDoubleClick={e => this.onLabelClick(e)}
            >
              {this.renderContent(text, id)}
            </label>
            <i className="fas fa-trash-alt" onClick={() => this.props.onClick(id)}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;