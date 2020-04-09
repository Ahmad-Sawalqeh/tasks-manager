import React, { useState } from 'react';
import './app.css';

// state is Mutable (changable)
// props is Immutable (read only)

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
	return (
  	<button className='btn add-btn' onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
	return (
  	<div>{props.message}</div>
  );
}

function App() {
	const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
	return (
    <>
      <h1 className='app-title'>My Counter</h1>
      <div className='container'>
        <div className='to-do'>
          <Button onClickFunction={incrementCounter} increment={1} />
          <Button onClickFunction={incrementCounter} increment={5} />
          <Button onClickFunction={incrementCounter} increment={10} />
          <Button onClickFunction={incrementCounter} increment={100} />
          <Display message={counter}/>
        </div>
      </div>  
    </>
  );
}

export default App;
