import React, { Component } from 'react';
import {v4 as randomId} from 'uuid';
import './app.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput : '',
      list : [],
      isEditing : false,
      editingItemId : 0
    }
  }

  changeUserInput(input){
    this.setState({
      userInput : input
    });
  }

  addToList(input, id){
    if(this.state.userInput !== ''){
      if(this.state.isEditing && id !== 0){
        const list = [...this.state.list];
        let newList = list.map(val => {
          if(val.id === id) val.value = input;
          return val;
        });
        this.setState({
          userInput : '',
          list : newList,
          isEditing : !this.state.isEditing,
          editingItemId : 0
        });
      }else{
        const newItem = {
          id: randomId(),
          completed : false,
          value: input
        }
        let list = [...this.state.list];
        list.push(newItem);
        this.setState({
          userInput : '',
          list
        });
      }
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updateList = list.filter(val => val.id !== id);
    this.setState({
      list: updateList
    });
  }

  itemToEdit(id){
    const list = [...this.state.list];
    const editingItem = list.filter(val => val.id === id);
    let itemvalue = editingItem[0].value;
    let itemId = editingItem[0].id;
    this.setState({
      userInput : itemvalue,
      isEditing : !this.state.isEditing,
      editingItemId : itemId
    });
  }

  completed(id){
    const list = [...this.state.list];
    let newList = list.map(val => {
      if(val.id === id) {
        if(val.completed === false){
          val.completed = true;
        }else{
          val.completed = false;
        }
      }
      return val;
    });
    this.setState({
      list: newList
    });
  }

  render(){
    return (
      <>
        <h1 className='app-title'>My List</h1>
        <div className='container'>
          <div className='to-do'>
            <h1>Add an Item ...</h1>
            <input className='inputField' onChange={e=>this.changeUserInput(e.target.value)} value={this.state.userInput} type='text' placeholder='type item here ...' />
            <button className='btn add-btn' onClick={()=>this.addToList(this.state.userInput, this.state.editingItemId)} >Add Item</button>
            <ul>
              {
                this.state.list.map((val, idx) =>{
                  return(
                    <div key={val.id} >
                      <li  className={`list ${val.completed ? 'completed' : ''}`} onClick={() => this.completed(val.id)} >{idx + 1}- {val.value}</li>
                      <button className='btn dele-btn' onClick={()=>this.deleteItem(val.id)} >Delete</button>
                      <button className='btn edit-btn' onClick={()=>this.itemToEdit(val.id)} >Edit</button>
                    </div>
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
}

export default App;

/*
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput : '',
      list : []
    }
  }

  changeUserInput(input){
    this.setState({
      userInput : input
    });
  }

  addToList(input){
    const newItem = {
      id: 1 + Math.random(),
      value: input
    }
    let list = [...this.state.list];
    list.push(newItem);
    this.setState({
      userInput : '',
      list
    });
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updateList = list.filter(val => val.id !== id);
    this.setState({
      list: updateList
    });
  }

  render(){
    return (
      <>
        <h1 className='app-title'>My List</h1>
        <div className='container'>
          <div className='to-do'>
            Add an Item ...
            <br />          
            <input className='inputField' onChange={e=>this.changeUserInput(e.target.value)} value={this.state.userInput} type='text' placeholder='type item here ...' />
            <button className='btn add-btn' onClick={()=>this.addToList(this.state.userInput)} >Add Item</button>
            <ul>
              {
                this.state.list.map((val, idx) =>{
                  return(
                    <>
                      <li className='list' key={val.id}>{idx + 1}- {val.value}</li>
                      <button className='btn dele-btn' onClick={()=>this.deleteItem(val.id)} >X</button>
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
}

export default App;
*/