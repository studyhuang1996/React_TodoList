import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './todolist/TodoList'
ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
