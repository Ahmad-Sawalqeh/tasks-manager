import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import EditForm from './../../editForm'
import './item.css';

import {
    setList, 
    setEdit,
    setWantedListToShow, 
    setCounter
} from "./../../../actions/actionCreater.js";

const Item = (props) => {
    const { val, idx } = props;

    const { list, status, counter } = useSelector(state => state);
    const dispatch = useDispatch();

    
    function deleteItem(id){
        const newlist = [...list];
        const updateList = newlist.filter(val => val.id !== id);
        let deletedItem = newlist.filter(val => val.id === id);
        let itemStatus = deletedItem[0].currentStatus.state.split('-').join('')
        let statistic = {...counter, deleted: counter.deleted + 1, [itemStatus]: counter[itemStatus] - 1}
        dispatch(setCounter(statistic))
        dispatch(setList(updateList));
        dispatch(setWantedListToShow(updateList));
    }

    function editItem(id){
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
        let statistic, currentItemState, previousItemState, newList = listCopy.map(val => {
            if(val.id === id) {
                let preNumber = val.currentStatus.number === 3 ? 0 : val.currentStatus.number + 1;
                val.currentStatus = {
                    number: preNumber,
                    state : status[preNumber]
                }
                if(preNumber === 0) preNumber = 4;
                currentItemState = val.currentStatus.state.split('-').join('')
                previousItemState = status[preNumber - 1].split('-').join('')
            }
            return val;
        });
        statistic = {...counter, [currentItemState]: counter[currentItemState] + 1, [previousItemState]: counter[previousItemState] - 1}
        dispatch(setCounter(statistic))
        dispatch(setList(newList));
        dispatch(setWantedListToShow(newList));
    }

    return (
        <>
            {
                val.isEditing ?
                    <EditForm id={val.id} borderColor={val.currentStatus.state} />
                :   (
                    <>
                        <p className="w-75 my-auto mx-3">{idx + 1}- {val.value}</p>
                        <span 
                            className={`${val.currentStatus.state} text-white font-weight-bold bg-dark status py-1 text-center my-auto mr-1`} 
                            onClick={() => taskStatus(val.id)} 
                        >
                            {val.currentStatus.state}
                        </span>
                        <i className="far fa-edit my-auto mx-4 font-weight-bold text-center" onClick={()=>editItem(val.id)}></i>
                        <i className="fas fa-trash my-auto mx-3 font-weight-bold text-center" onClick={()=>deleteItem(val.id)}></i>
                    </>
                )
            }
        </>
    )
}

export default Item;