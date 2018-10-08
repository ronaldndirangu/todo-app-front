import React from 'react';
import './todo.css';

const Todo = ({ onClick, onChange }) => (
  <div className="add-item">
    <label>Item: </label>
    <input onChange={onChange} name="item"></input>
    <button onClick={onClick} type="submit">Add</button>
  </div>
)

export default Todo;
