import React from 'react';
import { useSelector } from "react-redux";
import Item from './item'
import './list.css';


const List = () => {

    const { wantedListToShow } = useSelector(state => state);

    function itemsLeft (){
        return wantedListToShow.filter(item => item.currentStatus.state).length;
    }

    return (
        <>
            {
                Boolean(itemsLeft ()) === false ? (
                    <p className='lead text-center font-weight-bold'>There is No Tasks at this moment</p>
                )
                : (
                    <ul className='m-4'>
                        <li className='containerHead py-2 my-1 d-flex justify-content-between'>
                            <span className="ml-3 my-auto w-75 font-weight-bold">Task</span>
                            <span className='mr-3 statusHead font-weight-bold text-center'>Status</span>
                            <span className='mr-2 w-auto font-weight-bold text-center'>Edit</span>
                            <span className='w-auto font-weight-bold text-center'>Delete</span>
                        </li>
                        {
                            wantedListToShow.map((val, idx) =>{
                                return(
                                    <li 
                                        key={val.id} 
                                        className={`leftBorder${val.currentStatus.state} 
                                            ${val.currentStatus.state === 'canceled' ? 'alert-danger' : ''} 
                                            ${val.isEditing ? 'highlight' : ''} 
                                            item py-2 my-2 d-flex justify-content-between`}
                                    >
                                        <Item val={val} idx={idx} />
                                    </li>
                                );
                            })
                        }
                    </ul>
                )
            }
        </>
    )
}

export default List;
