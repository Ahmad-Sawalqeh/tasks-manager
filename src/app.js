import React from 'react';
import { useSelector } from "react-redux";

import TaskForm from './components/taskForm';
import TasksBoard from './components/tasksBoard';
import './app.css';

/*
** Task Manager MVC
  1. add item
  2. delete item
  3. edit item
  4. clear tasks list
  5. complete one item
  6. display tasks list
  7. delete all completed items
  8. make all items complete, all at once
  9. show only completed/active/all items
*/

function App(){

  const { list, isEditing } = useSelector(state => state);

  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <h1 className='m-3 font-weight-bold'>My List</h1>
          <TaskForm />
          {
            !isEditing && list[0] && <TasksBoard />
          }
        </div>
      </div>
    </>
  );

}

export default App;
