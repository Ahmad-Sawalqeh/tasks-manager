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

import './taskForm.css'

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
          value: userInput,
          currentStatus: {
            number: 0,
            state : 'Not-Started'
          }
        }
        newList = [...list];
        newList.push(newItem);
      }
      dispatch(setList(newList));
      dispatch(setWantedListToShow(newList));
      dispatch(setUserInput(''));
    }

    return (
      <div className='container card-body'>
        <form onSubmit={addItem} className="d-flex justify-content-between">
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text color text-white'>
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input className='form-control' onChange={changeUserInput} value={userInput} type='text' placeholder='+ Add New Task here ...' />
          </div>
          {/* <button className={`w-25 btn text-white font-weight-bold ${isEditing ? 'btn-secondary' : 'color'}`} >
            {isEditing ? `Edit Item` : `Add Item`}
          </button> */}
        </form>
      </div>
    );
}

export default TaskForm;
