import React from 'react';

class TodoItem extends React.Component {
  state = { editable: false }

  onLabelClick = () => {
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
          value={text}
          onChange={(e) => this.onInputChange(e, id)}
          onDoubleClick={this.setState({editable: false})}
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
              onChange={() => this.props.onChange(id)}
              type="checkbox"
              checked={completed}
            />
            <label
              style={completed ? completedStyle : null}
              onDoubleClick={this.onLabelClick}
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