import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { 
  setUserInput, 
  setIsEditing, 
  setEditingItemId, 
  setList, 
  setWantedListToShow, 
} from "./../../actions/actionCreater.js";

const List = () => {

    const { list, wantedListToShow, isEditing } = useSelector(state => state);
    const dispatch = useDispatch();

    function deleteItem(id){
        const newlist = [...list];
        const updateList = newlist.filter(val => val.id !== id);
        dispatch(setList(updateList));
        dispatch(setWantedListToShow(updateList));
    }
    
    function itemToEdit(id){
        const listCopy = [...list];
        const editingItem = listCopy.find(val => val.id === id);
        let itemvalue = editingItem.value;
        let itemId = editingItem.id;
        dispatch(setUserInput(itemvalue));
        dispatch(setIsEditing(!isEditing));
        dispatch(setEditingItemId(itemId));
    }
    
    function completed(id){
        const listCopy = [...list];
        let newList = listCopy.map(val => {
          if(val.id === id) val.complete = !val.complete;
          return val;
        });
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

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
