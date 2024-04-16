// App.js - main file which integrate the input and list components.
import React, { useState } from 'react';
import Input from './Input';
import List from './List';

const App = () => {
  const [tasks, setTasks] = useState([]);   //State to store the tasks

  //created a function to add a new tasks
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);    //add new task to tasks array
  };


  //function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);       //filter out tasks at given index
    setTasks(updatedTasks);           //update the tasks array
  };



  //now we are simple using html format here where initiallising the heading to the program, and then calling the function by using the prop concept of reactjs
  return (
    <div className="app">
      <h1>To-Do Application</h1>      
      <center>
      <Input addTask={addTask} /></center>
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
