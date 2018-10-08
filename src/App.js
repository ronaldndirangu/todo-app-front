import React, { Component } from 'react';
import AddItem from './containers/Todo';
import TodoList from './containers/GetTodo';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AddItem />
        <TodoList />
      </React.Fragment>
    );
  }
}

export default App;
