import React from 'react';
import General from './general'
import Status from './status'
import './tasksStatistics.css';


const TasksStatistics = () => {
    return (
        <div className='bg px-2'>
            <h2 className='font-weight-bold text-left my-5'>Tasks statistics</h2>
            <General />
            <hr className='bg-light my-4' />
            <Status />
        </div>
    )
}

export default TasksStatistics;
