import React from 'react';
import { useSelector } from "react-redux";

import './tasksBoard.css'

import TopControl from '../control/topControl';
import TaskForm from './../taskForm';
import List from '../list';
import BottomControl from '../control/bottomControl';

const TasksBoard = () => {

    const { list } = useSelector(state => state);

    function itemsLeft (){
        return list.filter(item => !item.complete).length;
        // return wantedListToShow.filter(item => !item.complete).length;
    }

    return (
        <>
            <div className="d-flex">
                <h3 className='mx-3 font-weight-bold'>Tasks Board</h3>
                <TopControl />
            </div>
            <TaskForm />
            <List />
            {/* <BottomControl /> */}

            
            {/* <p className='lead text-center font-weight-bold'>
                There is only <span className='text-primary'> {itemsLeft()} </span> items NOT completed yet
            </p> */}
        </>
    );
}

export default TasksBoard;
