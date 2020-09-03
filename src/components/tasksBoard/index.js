import React from 'react';
import { useSelector } from "react-redux";

import List from '../list';
import Control from '../control';

const TasksBoard = () => {

    const { list } = useSelector(state => state);

    function itemsLeft (){
        return list.filter(item => !item.complete).length;
        // return wantedListToShow.filter(item => !item.complete).length;
    }

    return (
        <>
            <div>
                <h2 className='m-3 font-weight-bold text-center'>Tasks board</h2>
                <p className='lead text-center font-weight-bold'>
                    There is only <span className='text-primary'> {itemsLeft()} </span> items NOT completed yet
                </p>
                <List />
                <Control />
            </div>
        </>
    );
}

export default TasksBoard;
