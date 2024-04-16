// Input.js - cretaed a component for adding a new task
import React, { useState } from 'react';
import './styles.css';      //import css file 

const Input = ({ addTask }) => {
  const [task, setTask] = useState('');     //state to store input tasks



  //handle input change
  const handleChange = (e) => {
    setTask(e.target.value);       // Update the task state with input value
  };


  // Handleling the key down event (Enter key)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask(task);        // Calling addTask function with input task
      setTask('');         // Clear input task
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => { addTask(task); setTask(''); }}>Add Task</button>
    </div>
  );
};

//we have created the button in the above step inorder to add the new tasks value though on clicking the enter key it's also working
export default Input;
