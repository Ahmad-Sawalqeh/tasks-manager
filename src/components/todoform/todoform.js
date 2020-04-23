
import React from 'react';

function ToDoForm(props){
    const {changeUserInput, addToList, userInput, isEditing } = props;
    return (
        <>
          <div className='card-body'>
            <h3>Add an Item ...</h3>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <div className='input-group-text bg-primary text-white'>
                  <i className="fas fa-book"></i>
                </div>
              </div>
              <input className='form-control text-capitalize' onChange={changeUserInput} value={userInput} type='text' placeholder='type item here ...' />
            </div>
            <button className={`btn btn-block mt-2 font-weight-bold ${isEditing ? 'btn-secondary' : 'btn-primary'}`} onClick={addToList} >
              {isEditing ? `Edit Item` : `Add Item`}
            </button>
          </div>
        </>
    );
}

export default ToDoForm;