import React from 'react';

function ToDoList(props){

    const { list, completed, deleteItem, itemToEdit, itemsToShow, wantedListToShow, deleteCompletedItem, hideShowAllItems, toggleItems, allCompletedItem, clearList } = props;

    function itemsLeft (){
        return list.filter(item => !item.complete).length;
        // return wantedListToShow.filter(item => !item.complete).length;
    }

    return (
        <>
            <div>
                <h2 className='m-3 font-weight-bold text-center'>To Do List</h2>
                <p className='lead text-center font-weight-bold'>
                    There is only <span className='text-primary'> {itemsLeft()} </span> items NOT completed yet
                </p>
                <ul className='list-group'>
                    <List wantedListToShow={wantedListToShow} completed={completed} itemToEdit={itemToEdit} deleteItem={deleteItem} />
                </ul>
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
                </div>
                <button className='btn btn-danger btn-block p-2' onClick={clearList} >Clear List <i className="fas fa-trash"></i></button>
            </div>
        </>
    );
}

const List = props => {
    const { wantedListToShow, completed, itemToEdit, deleteItem } = props;
    return (
        <>
            {
                wantedListToShow.map((val, idx) =>{
                    return(
                        <>
                            <div key={val.id} className='item d-flex justify-content-between'>
                                <li key={val.id} 
                                    className={`m-3 list-group-item ${val.complete ? 'completed' : ''}`} 
                                    onClick={() => completed(val.id)} >
                                    {idx + 1}- {val.value}
                                </li>
                                {
                                    val.complete ? 
                                        <span className='lead text-danger font-weight-bolder mt-4'>completed</span>
                                    :
                                        <button className='btn btn-success mr-3 commonStyleButton' onClick={()=>itemToEdit(val.id)} >
                                            Edit <i className="far fa-edit"></i>
                                        </button>
                                }
                                <button className='btn btn-warning commonStyleButton' onClick={()=>deleteItem(val.id)} >
                                    Delete <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </>
                    );
                })
            }
        </>
    )
}

export default ToDoList;
