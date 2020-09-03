import React from 'react';

const Control = props => {
    const {  wantedListToShow, hideShowAllItems, itemsToShow, toggleItems, deleteCompletedItem, clearList, allCompletedItem } = props;
    return (
        <div className='text-center'>
            <button className='btn btn-primary mb-3 mr-3' onClick={hideShowAllItems}>
                {toggleItems ? `Show all` : `Hide all`}
            </button>
            <button className='btn btn-info mb-3 mr-3' onClick={() => itemsToShow('active')}>Active Items</button>
            <button className='btn btn-info mb-3 mr-3' onClick={() => itemsToShow('completed')}>Completed Items</button>
            <button className='btn btn-info mb-3 mr-3' onClick={() => itemsToShow('all')}>All items</button>
            <button className='btn btn-warning mb-3 mr-3' onClick={allCompletedItem}>All completed</button>
            {
                wantedListToShow.some(oneItem => oneItem.complete) && <button className='btn btn-danger mb-3 mr-3' onClick={deleteCompletedItem}>Delete completed items</button>
            }
            <button className='btn btn-danger btn-block p-2' onClick={clearList} >Clear List <i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Control;
