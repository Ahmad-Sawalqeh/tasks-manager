import React from 'react';
import { useSelector } from "react-redux";


const Status = () => {

    const { counter: { NotStarted, InProgress, canceled, completed } } = useSelector(state => state);

    return (
        <>
            <h5 className='font-weight-bold text-left my-3'>Tasks Status :</h5>
            <div className='d-flex justify-content-between'>
                <p><span className='statisticSpan not-started-span'></span>Not Started</p><p>{NotStarted}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p><span className='statisticSpan in-progress-span'></span>In Progress</p><p>{InProgress}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p><span className='statisticSpan canceled-span'></span>Canceled</p><p>{canceled}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p><span className='statisticSpan completed-span'></span>Completed</p><p>{completed}</p>
            </div>
        </>
    )
}

export default Status;
