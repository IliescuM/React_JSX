// 1) Import the React and ReactDOM libraries Document Object Model
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a ref to the div with ID root
const element = document.getElementById('root');
// 3) Tell React to take control of that element

const root = ReactDOM.createRoot(element);
// 4) Create a component
function App() {
    const name = 'Samantha';
    const age = 23;
    const inputType = 'number';
    const minvalue = 5;

    //style={{
    //    backgroundColor: 'blue',
    //    width: '100px',
    //    height: '100px'
    //  }}

    // in JSX in-line styles are provided as objects 

    // in jsx the 'class attribute is written as 'className'
    // return <div className="divider" />

    //return <input spellCheck/>

    // return <input maxlength={5} />

    // return <textarea autoFocus={true} />;

    // all prop names follow camelCase

    //<input type="number" min={5} max={10} />

    //<input style={{ border: '3px solid red' }} type={inputType} min={minvalue} />


    // let message = "Bye there!";

    // if (Math.random() > 0.5) {
    //     message = 'Hello there!';
    // }

    // return <h1>{message}</h1> 

    // {} refrence a js variable or expression
    // react cannot show an oject as text 
}
// 5) Show the component on the screen.
root.render(<App />)``