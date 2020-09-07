import React from 'react';
// import { useSelector } from "react-redux";

import './tasksBoard.css'

import TopControl from '../control/topControl';
import TaskForm from './../taskForm';
import List from '../list';
import BottomControl from '../control/bottomControl';

const TasksBoard = () => {
    return (
        <>
            <div className="row mt-3">
                <div className='col-md-3 col-sm-12 pr-0'>
                    <h3 className='ml-3 font-weight-bold'>Tasks Board</h3>
                </div>
                <div className='col-md-9 col-sm-12 p-0'>
                    <TopControl />
                </div>
            </div>
            <TaskForm />
            <List />
            <BottomControl />
        </>
    );
}

export default TasksBoard;
