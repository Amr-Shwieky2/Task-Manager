import React, { useContext, useState } from 'react';
import { data } from '../Context/TaskContext';
import AddTask from './AddTask';

function TaskList() {  
  const { list, setList } = useContext(data);

  const removeTask = (taskToRemove) => {
    // Filter out the task to be removed from the list
    const updatedList = list.filter((task) => task !== taskToRemove);
    setList(updatedList);
  };

  return (
    <div>
      <AddTask />

      {list.map((task, index) => (
        <div key={index}>
            <h1>This is the list of tasks:</h1>
            <h3>{task}</h3>
            <button onClick={() => removeTask(task)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
