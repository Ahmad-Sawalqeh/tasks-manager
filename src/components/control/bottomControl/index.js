import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { 
  setList, 
  setWantedListToShow, 
} from "../../../actions/actionCreater.js";

import './bottomControl.css'

const BottomControl = () => {

    const { list, wantedListToShow } = useSelector(state => state);
    const dispatch = useDispatch();
    
    function deleteCompletedItem(){
        let newList = list.filter(item => item.currentStatus.state !== 'completed');
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

    function clearList(){
        dispatch(setList([]));
        dispatch(setWantedListToShow([]));
    }

    function allCompletedItem(){
        const listCopy = [...list];
        let newList = listCopy.map(val => {
            val.currentStatus = {
                number: 3,
                state : 'completed'
            }
            return val;
        });
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

    function cancelAllItem(){
        let newList = list.filter(item => item.currentStatus.state = 'canceled');
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

    function itemsLeft (){
        return wantedListToShow.filter(item => item.currentStatus.state).length;
    }

    return (
        <>
            {
                Boolean(itemsLeft ()) === true && (
                    <div className='text-right m-3'>
                        {
                            wantedListToShow.some(oneItem => oneItem.currentStatus.state === 'completed') && <button className='btn btn-dark m-1' onClick={deleteCompletedItem}>Remove Completed Tasks</button>
                        }
                        <button className='btn btn-dark m-1' onClick={allCompletedItem}>Make all Tasks Completed</button>
                        <button className='btn btn-dark m-1' onClick={cancelAllItem}>Cancel all Tasks</button>
                        <button className='btn btn-dark m-1' onClick={clearList} >Clear List <i className="fas fa-trash all"></i></button>
                    </div>
                )
            }
        </>
    )
}

export default BottomControl;
