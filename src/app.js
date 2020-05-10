
import React, { useReducer } from 'react';
import { v4 as randomId } from 'uuid';
import ToDoForm from './components/todoform/todoform.js'
import ToDoList from './components/todolist/todolist.js'
import reducer from './reducer/reducer.js'
// import FlipMove from 'react-flip-move';
import './app.css';

/*
** To Do MVC
  1. add item
  2. delete item
  3. edit item
  4. clear to do list
  5. complete one item
  6. display to do list
  7. delete all completed items
  8. make all items complete, all at once
  9. show only completed/active/all items
*/

function App(){

  const initialState = {
    userInput: '',
    list: [],
    isEditing: false,
    editingItemId: 0,
    wantedListToShow: [],
    toggleItems: false
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function changeUserInput(e){
    let input = e.target.value;
    dispatch({ type: 'setUserInput', payload: input });
  }

  function addToList(){
    const { userInput, list, isEditing, editingItemId } = state;
    if(userInput === '') return;
    let newList;
    if(isEditing && editingItemId !== 0){
      let listCopy = [...list];
      newList = listCopy.map(val => {
        if(val.id === editingItemId) val.value = userInput;
        return val;
      });
      dispatch({ type: 'setIsEditing', payload: !isEditing });
      dispatch({ type: 'setEditingItemId', payload: 0 });
    }else{
      const newItem = {
        id: randomId(),
        complete : false,
        value: userInput
      }
      newList = [...list];
      newList.push(newItem);
    }
    dispatch({ type: 'setList', payload: newList });
    dispatch({ type: 'setWantedListToShow', payload: newList });
    dispatch({ type: 'setUserInput', payload: '' });
  }

  function deleteItem(id){
    const { list } = state;
    const newlist = [...list];
    const updateList = newlist.filter(val => val.id !== id);
    dispatch({ type: 'setList', payload: updateList });
    dispatch({ type: 'setWantedListToShow', payload: updateList });
  }

  function itemToEdit(id){
    const { list, isEditing } = state;
    const listCopy = [...list];
    // const listWithoutSelectedItem = listCopy.filter(val => val.id !== id);
    const editingItem = listCopy.find(val => val.id === id);
    let itemvalue = editingItem.value;
    let itemId = editingItem.id;
    // setList(listWithoutSelectedItem);
    dispatch({ type: 'setUserInput', payload: itemvalue });
    dispatch({ type: 'setIsEditing', payload: !isEditing });
    dispatch({ type: 'setEditingItemId', payload: itemId });
  }

  function completed(id){
    const { list } = state;
    const listCopy = [...list];
    let newList = listCopy.map(val => {
      if(val.id === id) val.complete = !val.complete;
      return val;
    });
    dispatch({ type: 'setList', payload: newList });
    dispatch({ type: 'setWantedListToShow', payload: newList });
  }

  function itemsToShow(choise){
    const { list } = state;
    if(choise === 'active') {
      dispatch({ type: 'setWantedListToShow', payload: list.filter(item => !item.complete) });
    }else if(choise === 'completed'){
      dispatch({ type: 'setWantedListToShow', payload: list.filter(item => item.complete) });
    }else if(choise === 'all'){
      dispatch({ type: 'setWantedListToShow', payload: list });
    }
  }

  function deleteCompletedItem(){
    const { list } = state;
    let newList = list.filter(item => !item.complete);
    dispatch({ type: 'setList', payload: newList });
    dispatch({ type: 'setWantedListToShow', payload: newList });
  }

  function clearList(){
    dispatch({ type: 'setList', payload: [] });
    dispatch({ type: 'setWantedListToShow', payload: [] });
  }

  function hideShowAllItems(){
    const { list, toggleItems } = state;
    toggleItems ? dispatch({ type: 'setWantedListToShow', payload: list }) : dispatch({ type: 'setWantedListToShow', payload: [] });
    dispatch({ type: 'setToggleItems', payload: !toggleItems });
  }

  function allCompletedItem(){
    const { list } = state;
    const listCopy = [...list];
    let newList = listCopy.map(val => {
      val.complete = true;
      return val;
    });
    dispatch({ type: 'setList', payload: newList });
    dispatch({ type: 'setWantedListToShow', payload: newList });
  }

  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <h1 className='m-3 font-weight-bold'>My List</h1>
          <ToDoForm 
            changeUserInput={changeUserInput} 
            addToList={addToList} 
            userInput={state.userInput} 
            isEditing={state.isEditing}
          />
          {
            !state.isEditing && state.list[0] &&
              <ToDoList list={state.list} 
                completed={completed} 
                deleteItem={deleteItem} 
                itemToEdit={itemToEdit} 
                itemsToShow={itemsToShow} 
                wantedListToShow={state.wantedListToShow} 
                deleteCompletedItem={deleteCompletedItem}
                hideShowAllItems={hideShowAllItems}
                toggleItems={state.toggleItems}
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


/**********************************************************************************/


// import React, { useState, useReducer } from 'react';
// import { v4 as randomId } from 'uuid';
// import ToDoForm from './components/todoform/todoform.js'
// import ToDoList from './components/todolist/todolist.js'
// // import FlipMove from 'react-flip-move';
// import './app.css';

// /*
// ** To Do MVC
//   1. add item
//   2. delete item
//   3. edit item
//   4. clear to do list
//   5. complete one item
//   6. display to do list
//   7. delete all completed items
//   8. make all items complete, all at once
//   9. show only completed/active/all items
// */

// function App(){

//   const [userInput, setUserInput] = useState('');
//   const [list, setList] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingItemId, setEditingItemId] = useState(0);
//   const [wantedListToShow, setWantedListToShow] = useState([]);
//   const [toggleItems, setToggleItems] = useState(false);
  
//   function changeUserInput(e){
//     let input = e.target.value
//     setUserInput(input);
//     dispatch({ type: 'setUserInput', payload: input });
//   }

//   function addToList(){
//     if(userInput === '') return;
//     let newList;
//     if(isEditing && editingItemId !== 0){
//       let listCopy = [...list];
//       newList = listCopy.map(val => {
//         if(val.id === editingItemId) val.value = userInput;
//         return val;
//       });
//       setIsEditing(!isEditing);
//       setEditingItemId(0);
//     }else{
//       const newItem = {
//         id: randomId(),
//         complete : false,
//         value: userInput
//       }
//       newList = [...list];
//       newList.push(newItem);
//     }
//     setList(newList);
//     setWantedListToShow(newList);
//     setUserInput('');
//   }

//   function deleteItem(id){
//     const newlist = [...list];
//     const updateList = newlist.filter(val => val.id !== id);
//     setList(updateList);
//     setWantedListToShow(updateList);
//   }

//   function itemToEdit(id){
//     const listCopy = [...list];
//     // const listWithoutSelectedItem = listCopy.filter(val => val.id !== id);
//     const editingItem = listCopy.find(val => val.id === id);
//     let itemvalue = editingItem.value;
//     let itemId = editingItem.id;
//     // setList(listWithoutSelectedItem);
//     setUserInput(itemvalue);
//     setIsEditing(!isEditing);
//     setEditingItemId(itemId);
//   }

//   function completed(id){
//     const listCopy = [...list];
//     let newList = listCopy.map(val => {
//       if(val.id === id) val.complete = !val.complete;
//       return val;
//     });
//     setList(newList);
//     setWantedListToShow(newList);
//   }

//   function itemsToShow(choise){
//     if(choise === 'active') {
//       setWantedListToShow(list.filter(item => !item.complete));
//     }else if(choise === 'completed'){
//       setWantedListToShow(list.filter(item => item.complete));
//     }else if(choise === 'all'){
//       setWantedListToShow(list);
//     }
//   }

//   function deleteCompletedItem(){
//     let newList = list.filter(item => !item.complete);
//     setList(newList);
//     setWantedListToShow(newList);
//   }

//   function clearList(){
//     setList([]);
//     setWantedListToShow([]); 
//   }

//   function hideShowAllItems(){
//     toggleItems ? setWantedListToShow(list) : setWantedListToShow([]);
//     setToggleItems(!toggleItems);
//   }

//   function allCompletedItem(){
//     const listCopy = [...list];
//     let newList = listCopy.map(val => {
//       val.complete = true;
//       return val;
//     });
//     setList(newList);
//     setWantedListToShow(newList);
//   }

//   return (
//     <>
//       <div className='container mt-5'>
//         <div className='card'>
//           <h1 className='m-3 font-weight-bold'>My List</h1>
//           <ToDoForm 
//             changeUserInput={changeUserInput} 
//             addToList={addToList} 
//             userInput={userInput} 
//             isEditing={isEditing}
//           />
//           {
//             !isEditing && list[0] &&
//               <ToDoList list={list} 
//                 completed={completed} 
//                 deleteItem={deleteItem} 
//                 itemToEdit={itemToEdit} 
//                 itemsToShow={itemsToShow} 
//                 wantedListToShow={wantedListToShow} 
//                 deleteCompletedItem={deleteCompletedItem}
//                 hideShowAllItems={hideShowAllItems}
//                 toggleItems={toggleItems}
//                 allCompletedItem={allCompletedItem}
//                 clearList={clearList}
//               />
//           }
//         </div>
//       </div>
//     </>
//   );

// }

// export default App;


