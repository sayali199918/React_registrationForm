// import logo from './logo.svg';
import './App.css';

import React from 'react'

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const clickHandler = (e) => {
    console.log(e);
    // alert("Somethign Somethign!!", e);
  };

  return (
    <div>
      <h1>Hello World</h1>

      <input type="button" value="CLICK ME 1" onClick={clickHandler} />
      <input
        type="button"
        value="CLICK ME 2"
        onClick={(e) => clickHandler(e)} // Explicitly Passing the e
      />
      <input
        type="button"
        value="CLICK ME 33"
        onClick={(e) => clickHandler()} // Removd the e intentionaly
      />
    </div>
  );
}