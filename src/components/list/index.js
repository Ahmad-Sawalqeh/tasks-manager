import React from 'react';

const List = props => {
    const { wantedListToShow, completed, itemToEdit, deleteItem } = props;
    return (
        <ul className='list-group'>
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
        </ul>
    )
}

export default List;
