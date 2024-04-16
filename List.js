// List.js - it is used for displaying the list of tasks
import React from 'react';
import './styles.css';        //immprt css file

const List = ({ tasks, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
