import React from 'react';
import { v4 as randomId } from 'uuid';
import { useSelector, useDispatch } from "react-redux";

import { 
  setUserInput, 
  setIsEditing, 
  setEditingItemId, 
  setList, 
  setWantedListToShow, 
} from "./../../actions/actionCreater.js";

const TaskForm = () => {

    const { userInput, list, isEditing, editingItemId, } = useSelector(state => state);
    const dispatch = useDispatch();

    function changeUserInput(e){
      let input = e.target.value;
      dispatch(setUserInput(input));
    }

    function addItem(e){
      e.preventDefault();
      if(userInput === '') return;
      let newList;
      if(isEditing && editingItemId !== 0){
        let listCopy = [...list];
        newList = listCopy.map(val => {
          if(val.id === editingItemId) val.value = userInput;
          return val;
        });
        dispatch(setIsEditing(!isEditing));
        dispatch(setEditingItemId(0));
      }else{
        const newItem = {
          id: randomId(),
          complete : false,
          value: userInput
        }
        newList = [...list];
        newList.push(newItem);
      }
      dispatch(setList(newList));
      dispatch(setWantedListToShow(newList));
      dispatch(setUserInput(''));
    }

    return (
        <>
          <div className='card-body'>
            <h3>Add an Item ...</h3>
            <form onSubmit={addItem}>
              <div className='input-group'>
                <div className='input-group-prepend'>
                  <div className='input-group-text bg-primary text-white'>
                    <i className="fas fa-book"></i>
                  </div>
                </div>
                <input className='form-control text-capitalize' onChange={changeUserInput} value={userInput} type='text' placeholder='type item here ...' />
              </div>
              <button className={`btn btn-block mt-2 font-weight-bold ${isEditing ? 'btn-secondary' : 'btn-primary'}`} >
                {isEditing ? `Edit Item` : `Add Item`}
              </button>
            </form>
          </div>
        </>
    );
}

export default TaskForm;
