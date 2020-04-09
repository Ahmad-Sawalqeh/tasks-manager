import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './app.css';

function App(){

  const [userInput, setUserInput] = useState('');
  const [list, setList] = useState([]);

  function changeUserInput(e){
    let input = e.target.value
    setUserInput(input);
  }

  function addToList(){
    const newItem = {
      id: uuid(),
      value: userInput
    }
    let newlist = [...list];
    newlist.push(newItem);
    setList(newlist);
    setUserInput('');
  }

  function deleteItem(id){
    const newlist = [...list];
    const updateList = newlist.filter(val => val.id !== id);
    setList(updateList);
  }

  return (
    <>
      <h1 className='app-title'>My List</h1>
      <div className='container'>
        <div className='to-do'>
          Add an Item ...
          <br />          
          <input className='inputField' onChange={changeUserInput} value={userInput} type='text' placeholder='type item here ...' />
          <button className='btn add-btn' onClick={addToList} >Add Item</button>
          <ul>
            {
              list.map((val, idx) =>{
                return(
                  <>
                    <li className='list' key={val.id}>{idx + 1}- {val.value}</li>
                    <button className='btn dele-btn' onClick={()=>deleteItem(val.id)} >X</button>
                  </>
                  );
                }
              )
            }
          </ul>
        </div>
      </div>
    </>
  );

}

export default App;
