import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  <div className="nav">
    <ul className="todosList">
      {todos.map(todo => (
        <li className="todosList__item" key={todo.id}>
          <Todo
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        </li>
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};