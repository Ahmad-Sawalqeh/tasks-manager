import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { 
  setList, 
  setWantedListToShow, 
  setEdit,
  setCounter
} from "./../../actions/actionCreater.js";

import './editForm.css'

const EditForm = (props) => {
    const { id, borderColor } = props;
    const { list, edit, counter } = useSelector(state => state);
    const dispatch = useDispatch();

    function changeEditedUserInput(e){
      let editedItem = {
        userInput: e.target.value,
        itemId: id,
      }
      dispatch(setEdit(editedItem));
    }

    function editItem(e){
        e.preventDefault()

        const listCopy = [...list];
        let editedItem, doneEditedItem = edit.userInput;
        let updateList = listCopy.map(val => {
          if(val.id === id) {
            editedItem = val.value
            val = {
              ...val,
              value : edit.userInput,
              isEditing : !val.isEditing
            }
          }
          return val;
        });
        let resetEditedItem = {
            userInput: '',
            itemId: 0,
        }
        if(editedItem !== doneEditedItem){
          let statistic = {...counter, edited: counter.edited + 1}
          dispatch(setCounter(statistic))
        }
        dispatch(setList(updateList));        
        dispatch(setWantedListToShow(updateList));
        dispatch(setEdit(resetEditedItem));
    }

    return (
      <div className='container'>
        <form onSubmit={editItem} className="d-flex justify-content-between">
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className="my-auto mx-1 font-weight-bold text-center">Editing Task</span>
              <div className={`input-group-text iconColor${borderColor} text-white`}>
                <i className="far fa-edit editColor"></i>
              </div>
            </div>
            <input className={`form-control edit ${borderColor}`} onChange={changeEditedUserInput} value={edit.userInput} type='text' placeholder='Edit Task here ...' />
          </div>
        </form>
      </div>
    );
}

export default EditForm;
