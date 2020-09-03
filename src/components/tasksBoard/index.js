import React from 'react';
import List from '../list';
import Control from '../control';

function TasksBoard(props){

    const { list, completed, deleteItem, itemToEdit, itemsToShow, wantedListToShow, deleteCompletedItem, hideShowAllItems, toggleItems, allCompletedItem, clearList } = props;

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
                <List wantedListToShow={wantedListToShow} completed={completed} itemToEdit={itemToEdit} deleteItem={deleteItem} />
                <Control wantedListToShow={wantedListToShow} hideShowAllItems={hideShowAllItems} itemsToShow={itemsToShow} toggleItems={toggleItems} deleteCompletedItem={deleteCompletedItem} clearList={clearList} allCompletedItem={allCompletedItem} />
            </div>
        </>
    );
}

export default TasksBoard;
