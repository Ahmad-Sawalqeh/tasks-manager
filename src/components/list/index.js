import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import EditForm from './../editForm'
import './list.css';

import {
  setList, 
  setEdit,
  setWantedListToShow, 
} from "./../../actions/actionCreater.js";

const List = () => {

    const { list, wantedListToShow, status } = useSelector(state => state);
    const dispatch = useDispatch();

    function deleteItem(id){
        const newlist = [...list];
        const updateList = newlist.filter(val => val.id !== id);
        dispatch(setList(updateList));
        dispatch(setWantedListToShow(updateList));
    }
    
    function itemToEdit(id){
        let oldListCopy, listCopy = [...list];
        let alreadyThereIsEditedItem = listCopy.some(val => val.isEditing);
        if(alreadyThereIsEditedItem){
            oldListCopy = listCopy.map(val => {
                if(val.isEditing) val.isEditing = !val.isEditing
                return val;
            });
            let resetEditedItem = {
                userInput: '',
                itemId: 0,
            }
            dispatch(setList(oldListCopy));
            dispatch(setEdit(resetEditedItem));
            listCopy = oldListCopy;
        }
        const editingItem = listCopy.find(val => val.id === id);
        let newList = listCopy.map(val => {
            if(val.id === id) val.isEditing = !val.isEditing
            return val;
        });
        let editedItem = {
            userInput: editingItem.value,
            itemId: editingItem.id,
        }
        dispatch(setList(newList));
        dispatch(setEdit(editedItem));
    }
    
    function taskStatus(id){
        const listCopy = [...list];
        let newList = listCopy.map(val => {
            if(val.id === id) {
                let preNumber = val.currentStatus.number
                if(preNumber === 3) preNumber = -1
                val.currentStatus = {
                    number: preNumber + 1,
                    state : status[preNumber + 1]
                }
            }
            return val;
        });
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

    function itemsLeft (){
        return wantedListToShow.filter(item => item.currentStatus.state).length;
    }

    return (
        <>
            {
                Boolean(itemsLeft ()) === false ? (
                    <p className='lead text-center font-weight-bold'>There is No tasks at this moment</p>
                )
                : (
                    <ul className='list-group'>
                        <li className='py-2 my-1 d-flex justify-content-between'>
                            <span className="taskHead font-weight-bold my-auto ml-3">Task</span>
                            <span className='statusHead font-weight-bold text-center'>Status</span>
                            <span className='editHead font-weight-bold text-center'>Edit</span>
                            <span className='removeHead font-weight-bold text-center'>Remove</span>
                        </li>
                        {
                            wantedListToShow.map((val, idx) =>{
                                return(
                                    <li key={val.id} className={`leftBorder${val.currentStatus.state} ${val.isEditing ? 'highlight' : ''} item py-2 my-1 d-flex justify-content-between`} >
                                        {
                                            val.isEditing ?
                                                <EditForm id={val.id} borderColor={val.currentStatus.state} />
                                            :   (
                                                <>
                                                    <p className="task my-auto ml-3">{idx + 1}- {val.value}</p>
                                                    <span 
                                                        className={`${val.currentStatus.state} text-white font-weight-bold bg-dark status py-1 text-center`} 
                                                        onClick={() => taskStatus(val.id)} 
                                                    >
                                                        {val.currentStatus.state}
                                                    </span>
                                                    <i className="far fa-edit my-auto mx-5 font-weight-bold text-center" onClick={()=>itemToEdit(val.id)}></i>
                                                    <i className="fas fa-trash my-auto mx-5 font-weight-bold text-center" onClick={()=>deleteItem(val.id)}></i>
                                                </>
                                            )
                                        }                                        
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
