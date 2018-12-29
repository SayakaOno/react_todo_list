import React from "react";
import TodoItem from "./TodoItem";

class MainContent extends React.Component {
  state = { todos: [] };

  handleChange = (e, id, text = "") => {
    let todos = [...this.state.todos];
    let targetTodo = todos.find(todo => todo.id === id);
    let index = todos.indexOf(targetTodo);
    todos[index] = { ...targetTodo };

    if (e.target.type === "checkbox") {
      todos[index].completed = !this.state.todos[index].completed;
    } else {
      todos[index].text = text;
    }
    this.setState({ todos });
  };

  addItem = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Date.now(), text: "", completed: false }
      ]
    });
  };

  deleteItem = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(value => value.id !== id);
      return { todos: updatedTodos };
    });
  };

  editEnd = (id, text) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.slice();
      updatedTodos.todos.forEach(item => {
        if (item.id === id) {
          item.text = text;
        }
      });
      return updatedTodos;
    });
  };

  render() {
    const todoItems =
      this.state.todos.length === 0 ? null : (
        <div className="ui inverted segment">
          <div className="ui inverted relaxed divided list">
            {this.state.todos.map(item => {
              return (
                <TodoItem
                  onChange={this.handleChange}
                  onDelete={this.deleteItem}
                  key={item.id}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      );

    return (
      <main>
        {todoItems}
        <button className="ui grey button add" onClick={this.addItem}>
          Add todo
        </button>
      </main>
    );
  }
}

export default MainContent;
