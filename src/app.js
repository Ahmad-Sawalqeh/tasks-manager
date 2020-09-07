import React from 'react';
import TasksStatistics from './components/tasksStatistics';
import TasksBoard from './components/tasksBoard';
import './app.css';

/*
** Tasks Manager MVC
  1. add item
  2. delete item
  3. edit item
  4. clear tasks list
  5. complete one item
  6. display tasks list
  7. delete all completed items
  8. make all items complete, all at once
  9. show only completed/In-Progress/canceled/Not-Started/all items
*/

function App(){
  return (
    <>
      <div className='container bg-light mt-3 rounded'>
        <h1 className='font-weight-bold text-center py-5'>Tasks Manager</h1>
        <div className="row">
          <div className='bg col-md-3 p-3 text-light'>
            <TasksStatistics />
          </div>
          <div className='col-md-9 py-3 px-2 bg-borad'>
            <TasksBoard />
          </div>
        </div>
      </div>
    </>
  );

}

export default App;
