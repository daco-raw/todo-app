import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/components';

export const todoList = new TodoList();

//render html local-Storage
todoList.todos.forEach( crearTodoHtml );


console.log('todos', todoList.todos);




