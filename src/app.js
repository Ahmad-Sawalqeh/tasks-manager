import React, { useState } from 'react';
import { v4 as randomId } from 'uuid';
import ToDoForm from './components/todoform/todoform.js'
import ToDoList from './components/todolist/todolist.js'
// import FlipMove from 'react-flip-move';
import './app.css';

function App(){

  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItemId, setEditingItemId] = useState(0);
  const [wantedListToShow, setWantedListToShow] = useState([]);
  const [toggleItems, setToggleItems] = useState(false);
  
  function changeUserInput(e){
    let input = e.target.value
    setUserInput(input);
  }

  function addToList(){
    if(userInput !== ''){
      let newList;
      if(isEditing && editingItemId !== 0){
        let listCopy = [...list];
        newList = listCopy.map(val => {
          if(val.id === editingItemId) val.value = userInput;
          return val;
        });
        setIsEditing(!isEditing);
        setEditingItemId(0);
      }else{
        const newItem = {
          id: randomId(),
          complete : false,
          value: userInput
        }
        newList = [...list];
        newList.push(newItem);
      }
      setList(newList);
      setUserInput('');
      setWantedListToShow(newList);
    }
  }

  function deleteItem(id){
    const newlist = [...list];
    const updateList = newlist.filter(val => val.id !== id);
    setList(updateList);
  }

  function itemToEdit(id){
    const listCopy = [...list];
    // const listWithoutSelectedItem = listCopy.filter(val => val.id !== id);
    const editingItem = listCopy.find(val => val.id === id);
    let itemvalue = editingItem.value;
    let itemId = editingItem.id;
    // setList(listWithoutSelectedItem);
    setUserInput(itemvalue);
    setIsEditing(!isEditing);
    setEditingItemId(itemId);
  }

  function completed(id){
    const listCopy = [...list];
    let newList = listCopy.map(val => {
      if(val.id === id) val.complete = !val.complete;
      return val;
    });
    setList(newList);
  }

  function itemsToShow(choise){
    if(choise === 'active') {
      setWantedListToShow(list.filter(item => !item.complete));
    }else if(choise === 'completed'){
      setWantedListToShow(list.filter(item => item.complete));
    }else if(choise === 'all'){
      setWantedListToShow(list);
    }
  }

  function deleteCompletedItem(){
    let newList = list.filter(item => !item.complete);
    setList(newList);
    setWantedListToShow(newList);
  }

  function clearList(){
    setList([]);
  }

  function hideAllItems(){
    toggleItems ?       
      setWantedListToShow(list)
    :
      setWantedListToShow([]);

    setToggleItems(!toggleItems);
  }

  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <h1 className='m-3 font-weight-bold'>My List</h1>
          <ToDoForm 
            changeUserInput={changeUserInput} 
            addToList={addToList} 
            userInput={userInput} 
            isEditing={isEditing}
          />
          {
            !isEditing && list[0] ?
              <ToDoList list={list} 
                completed={completed} 
                deleteItem={deleteItem} 
                itemToEdit={itemToEdit} 
                itemsToShow={itemsToShow} 
                wantedListToShow={wantedListToShow} 
                deleteCompletedItem={deleteCompletedItem}
                hideAllItems={hideAllItems}
                toggleItems={toggleItems}
                clearList={clearList}
              />
            :
              null
          }
        </div>
      </div>
    </>
  );

}

export default App;
