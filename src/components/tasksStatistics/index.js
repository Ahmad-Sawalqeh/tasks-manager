import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './tasksStatistics.css';


const TasksStatistics = () => {

    const { list, counter: { deleted, edited, NotStarted, InProgress, canceled, completed } } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className='bg'>
            <h2 className='font-weight-bold text-left my-5'>Tasks statistics</h2>
            <div>
                <h5 className='font-weight-bold text-left my-3'>General :</h5>
                <p>Number of Tasks : {list.length}</p>
                <p>Deleted Tasks : {deleted}</p>
                <p>Edited Tasks : {edited}</p>
            </div>
            <hr className='bg-light my-3' />
            <div>
                <h5 className='font-weight-bold text-left my-3'>Tasks Status :</h5>
                <div className='mb-2'>
                    <span className='statisticSpan not-started-span'></span><span>Not Started : {NotStarted}</span><br/>
                </div>
                <div className='mb-2'>
                    <span className='statisticSpan in-progress-span'></span><span>In Progress : {InProgress}</span><br/>
                </div>
                <div className='mb-2'>
                    <span className='statisticSpan canceled-span'></span><span>Canceled : {canceled}</span><br/>
                </div>
                <div className='mb-2'>
                    <span className='statisticSpan completed-span'></span><span>Completed : {completed}</span>
                </div>
            </div>
        </div>
    )
}

export default TasksStatistics;
