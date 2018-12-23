import React from 'react';
import TodoItem from './TodoItem';
import todoData from '../data/TodoData';

class MainContent extends React.Component {
  state = { todos: todoData };

  handleChange = (e, id, text="") => {
    if (e.target.type === 'checkbox') {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
        return updatedTodos;
      });
      return;
    }
    this.setState(prevState => {
      let updateTodos = prevState.todos.slice();
      updateTodos.find((item, index) => {
        if (item.id === id) {
          updateTodos[index].text = text;
        } 
      });
      return updateTodos;
    });
  }

  addItem = () => {
    this.setState(prevState => {
      let updatedTodos = prevState.todos.push({
        id: Date.now(),
        text: '',
        completed: false
      });
      return updatedTodos;
    });
  }

  deleteItem = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(value => value.id !== id);
      return {todos: updatedTodos};
    });
  }

  editEnd = (id, text) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.slice();
      updatedTodos.todos.forEach(item => {
        if (item.id === id) {
          item.text = text;
        }
      });
      return updatedTodos;
    })
  }

  render() {
    const todoItems =  this.state.todos.map(item => {
      return (
        <TodoItem
          onChange={this.handleChange}
          onClick={this.deleteItem}
          key={item.id}
          item={item}
        />
      );
    });

    return (
      <main style={{margin: "100px"}}>
        <div className="ui inverted segment" style={{maxWidth: 400, margin: '0 auto'}}>
          <div className="ui inverted relaxed divided list">
            {todoItems}
          </div>
        </div>
        <button
          className="ui grey button add"
          onClick={this.addItem}
        >
          Add todo
        </button>
      </main>
    );
  }
}

export default MainContent;