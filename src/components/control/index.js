import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { 
  setList, 
  setWantedListToShow, 
  setToggleItems, 
} from "./../../actions/actionCreater.js";

const Control = () => {

    const { list, wantedListToShow, toggleItems } = useSelector(state => state);
    const dispatch = useDispatch();

    function itemsToShow(choise){
        if(choise === 'active') {
          dispatch(setWantedListToShow(list.filter(item => !item.complete)));
        }else if(choise === 'completed'){
          dispatch(setWantedListToShow(list.filter(item => item.complete)));
        }else if(choise === 'all'){
          dispatch(setWantedListToShow(list));
        }
     }
    
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
            <button className='btn btn-danger btn-block p-2' onClick={clearList} >Clear List <i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Control;
