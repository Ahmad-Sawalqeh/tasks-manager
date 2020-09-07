import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import {
  setWantedListToShow, 
} from "./../../../actions/actionCreater.js";

import './topControl.css'

const TopControl = () => {

    const { list } = useSelector(state => state);
    const dispatch = useDispatch();

    function itemsToShow(choise){
        if(choise === 'all'){
          dispatch(setWantedListToShow(list));
        }else{
          dispatch(setWantedListToShow(list.filter(item => choise === item.currentStatus.state)));
        }
    }

    return (
      <>
        {
          list.length !== 0 && (
          <>
            <button className='btn btn-light mx-1' onClick={() => itemsToShow('all')}>list</button>
            <button className='btn btn-light mx-1' onClick={() => itemsToShow('Not-Started')}>Not-Started</button>
            <button className='btn btn-light mx-1' onClick={() => itemsToShow('In-Progress')}>In-Progress</button>
            <button className='btn btn-light mx-1' onClick={() => itemsToShow('canceled')}>Canceled</button>
            <button className='btn btn-light mx-1' onClick={() => itemsToShow('completed')}>Completed</button>
          </>
        )}
      </>
    );
}

export default TopControl;
