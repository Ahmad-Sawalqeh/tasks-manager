import React from 'react';
import { v4 as randomId } from 'uuid';
import { useSelector, useDispatch } from "react-redux";

import { 
  setUserInput, 
  setList, 
  setWantedListToShow, 
  setCounter
} from "./../../actions/actionCreater.js";

import './taskForm.css'

const TaskForm = () => {

    const { userInput, list, counter } = useSelector(state => state);
    const dispatch = useDispatch();

    function changeUserInput(e){
      let input = e.target.value;
      dispatch(setUserInput(input));
    }

    function addItem(e){
      e.preventDefault();
      if(userInput === '') return;
      let statistic, newList = [...list];
      const newItem = {
        id: randomId(),
        value: userInput,
        currentStatus: {
          number: 0,
          state : 'Not-Started'
        },
        isEditing: false
      }
      newList.push(newItem);
      statistic = {...counter, NotStarted: counter.NotStarted + 1 }
      dispatch(setCounter(statistic))
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
        </form>
      </div>
    );
}

export default TaskForm;
