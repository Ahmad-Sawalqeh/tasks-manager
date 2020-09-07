import React from 'react';
import General from './general'
import Status from './status'
import './tasksStatistics.css';


const TasksStatistics = () => {
    return (
        <div className='bg px-2 mt-3'>
            <h3 className='font-weight-bold text-left mb-4'>Tasks statistics</h3>
            <General />
            <hr className='bg-light my-4' />
            <Status />
        </div>
    )
}

export default TasksStatistics;
