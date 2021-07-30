// import logo from './logo.svg';
import './App.css';

import React from 'react'

function App() {
  return (
    <div>
   <MyComponent heading="Java" desc="java is cool"/>
   <MyComponent heading="JavaScript" desc="javaScript is Hot"/>
   <MyComponent heading="python" desc="python is intelligent"/>

      
    </div>
  )
}

function MyComponent({ heading, desc }){
  return (
    <div className="bg-dark p-3 text-light mb-1">
    <h1> Learning {heading}</h1>
    <hr />

    <p>
    <mark className="rounded alert-warning">{desc}</mark> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione reprehenderit dolorem laborum, tenetur fugiat ut! Eligendi fuga sint quae aspernatur!</p>
    </div>
  )
}

export default App

