import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { v4 as randomId } from 'uuid';

import { setUserInput, setIsEditing, setEditingItemId, setList, setWantedListToShow, setToggleItems,  } from "./actions/actionCreater.js";

import TaskForm from './components/taskForm';
import TasksBoard from './components/tasksBoard';
import './app.css';

/*
** Task Manager MVC
  1. add item
  2. delete item
  3. edit item
  4. clear tasks list
  5. complete one item
  6. display tasks list
  7. delete all completed items
  8. make all items complete, all at once
  9. show only completed/active/all items
*/

function App(){

  const { userInput, list, isEditing, editingItemId, wantedListToShow, toggleItems } = useSelector(state => state);
  const dispatch = useDispatch();

  function changeUserInput(e){
    let input = e.target.value;
    dispatch(setUserInput(input));
  }

  function addToList(){
    if(userInput === '') return;
    let newList;
    if(isEditing && editingItemId !== 0){
      let listCopy = [...list];
      newList = listCopy.map(val => {
        if(val.id === editingItemId) val.value = userInput;
        return val;
      });
      dispatch(setIsEditing(!isEditing));
      dispatch(setEditingItemId(0));
    }else{
      const newItem = {
        id: randomId(),
        complete : false,
        value: userInput
      }
      newList = [...list];
      newList.push(newItem);
    }
    dispatch(setList(newList));
    dispatch(setWantedListToShow(newList));
    dispatch(setUserInput(''));
  }

  function deleteItem(id){
    const newlist = [...list];
    const updateList = newlist.filter(val => val.id !== id);
    dispatch(setList(updateList));
    dispatch(setWantedListToShow(updateList));
  }

  function itemToEdit(id){
    const listCopy = [...list];
    const editingItem = listCopy.find(val => val.id === id);
    let itemvalue = editingItem.value;
    let itemId = editingItem.id;
    dispatch(setUserInput(itemvalue));
    dispatch(setIsEditing(!isEditing));
    dispatch(setEditingItemId(itemId));
  }

  function completed(id){
    const listCopy = [...list];
    let newList = listCopy.map(val => {
      if(val.id === id) val.complete = !val.complete;
      return val;
    });
    dispatch(setList(newList));
    dispatch(setWantedListToShow(newList));
  }

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
    <>
      <div className='container mt-5'>
        <div className='card'>
          <h1 className='m-3 font-weight-bold'>My List</h1>
          <TaskForm 
            changeUserInput={changeUserInput} 
            addToList={addToList} 
            userInput={userInput} 
            isEditing={isEditing}
          />
          {
            !isEditing && list[0] &&
              <TasksBoard list={list} 
                completed={completed} 
                deleteItem={deleteItem} 
                itemToEdit={itemToEdit} 
                itemsToShow={itemsToShow} 
                wantedListToShow={wantedListToShow} 
                deleteCompletedItem={deleteCompletedItem}
                hideShowAllItems={hideShowAllItems}
                toggleItems={toggleItems}
                allCompletedItem={allCompletedItem}
                clearList={clearList}
              />
          }
        </div>
      </div>
    </>
  );

}

export default App;
