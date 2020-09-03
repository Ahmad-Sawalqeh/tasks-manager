import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { 
  setList, 
  setWantedListToShow, 
  setToggleItems, 
} from "../../../actions/actionCreater.js";

const BottomControl = () => {

    const { list, wantedListToShow, toggleItems } = useSelector(state => state);
    const dispatch = useDispatch();
    
    function deleteCompletedItem(){
        let newList = list.filter(item => !item.complete);
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

    function clearList(){
        dispatch(setList([]));
        dispatch(setWantedListToShow([]));
    }

    function hideShowAllItems(){
        toggleItems ? dispatch(setWantedListToShow(list)) : dispatch(setWantedListToShow([]));
        dispatch(setToggleItems(!toggleItems));
    }

    function allCompletedItem(){
        const listCopy = [...list];
        let newList = listCopy.map(val => {
            val.complete = true;
            return val;
        });
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

    return (
        <div className='text-right'>
            {
                wantedListToShow.some(oneItem => oneItem.complete) && <button className='btn btn-light m-1' onClick={deleteCompletedItem}>Remove Completed Tasks</button>
            }
            <button className='btn btn-light m-1' onClick={allCompletedItem}>Make all Tasks Completed</button>
            <button className='btn btn-light m-1' onClick={clearList} >Clear List <i className="fas fa-trash"></i></button>
        </div>
    )
}

export default BottomControl;
