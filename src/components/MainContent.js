import React from 'react';
import TodoItem from './TodoItem';
import todoData from '../data/TodoData';

class MainContent extends React.Component {
  state = { todos: todoData };

  onCheckboxClicked = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      return updatedTodos;
    });
  }

  render() {
    const todoItems =  this.state.todos.map(item => {
      return <TodoItem onChange={this.onCheckboxClicked} key={item.id} item={item} />;
    });

    return (
      <main style={{margin: 30}}>
        <div className="ui inverted segment" style={{maxWidth: 400, margin: '0 auto'}}>
          <div className="ui inverted relaxed divided list">
            {todoItems}
          </div>
        </div>
      </main>
    );
  }
}

export default MainContent;