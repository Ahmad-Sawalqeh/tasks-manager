import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { 
  setList, 
  setWantedListToShow, 
  setCounter
} from "../../../actions/actionCreater.js";

import './bottomControl.css'

const BottomControl = () => {

    const { list, wantedListToShow, counter } = useSelector(state => state);
    const dispatch = useDispatch();
    
    function deleteCompletedItem(){
        let statistic, newList = list.filter(item => item.currentStatus.state !== 'completed');
        statistic = {...counter, deleted: counter.deleted + (list.length - newList.length), completed: 0 }
        dispatch(setCounter(statistic))
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

    function clearList(){
        let statistic = { ...counter,
            deleted: counter.deleted + list.length,
            NotStarted: 0,
            InProgress: 0,
            canceled: 0,
            completed: 0,
        }
        dispatch(setCounter(statistic))
        dispatch(setList([]));
        dispatch(setWantedListToShow([]));
    }

    function allCompletedItem(){
        const listCopy = [...list];
        let statistic, newList = listCopy.map(val => {
            val.currentStatus = {
                number: 3,
                state : 'completed'
            }
            return val;
        });
        statistic = { ...counter, 
            NotStarted: 0,
            InProgress: 0,
            canceled: 0,
            completed: counter.completed + (list.length - counter.completed),
        }
        dispatch(setCounter(statistic))
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

    function cancelAllItem(){
        let statistic, listCopy = [...list], newList = listCopy.map(item => {
            item.currentStatus = {
                number: 2,
                state : 'canceled'
            }
            return item
        })
        statistic = { ...counter,
            NotStarted: 0,
            InProgress: 0,
            canceled: counter.canceled + (list.length - counter.canceled),
            completed: 0,
        }
        dispatch(setCounter(statistic))
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
                    <div className='d-flex justify-content-end'>
                        {
                            wantedListToShow.some(oneItem => oneItem.currentStatus.state === 'completed') && <button className='btn btn-dark m-1' onClick={deleteCompletedItem}>Remove Completed Tasks</button>
                        }
                        <button className='btn btn-dark m-1' onClick={allCompletedItem}>Make all Tasks Completed</button>
                        <button className='btn btn-dark m-1' onClick={cancelAllItem}>Cancel all Tasks</button>
                        <button className='btn btn-dark m-1' onClick={clearList} >Clear List&nbsp;&nbsp;<i className="fas fa-trash all"></i></button>
                    </div>
                )
            }
        </>
    )
}

export default BottomControl;
