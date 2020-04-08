import React, { Component } from 'react';
import './app.css';

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

/*
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput : '',
      list : []
    }

    this.changeUserInput = this.changeUserInput.bind(this);
    this.addToList = this.addToList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  changeUserInput(e){
    let input = e.target.value;
    this.setState({
      userInput : input
    });
  }

  addToList(){
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.userInput
    }
    let newList = [...this.state.list];
    newList.push(newItem);
    this.setState({
      userInput : '',
      list : newList
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
            <input className='inputField' onChange={this.changeUserInput} value={this.state.userInput} type='text' placeholder='type item here ...' />
            <button className='btn add-btn' onClick={this.addToList} >Add Item</button>
            <ul>
              {
                this.state.list.map((val, idx) =>{
                  return(
                    <>
                      <li className='list' key={val.id}>{idx + 1}- {val.value}</li>
                      <button className='btn dele-btn' onClick={this.deleteItem(val.id)} >X</button>
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