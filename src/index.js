//import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = function () {
    const buttonText = {text: 'Click me'};
     
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    )
} 

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
// Differences between jsx and html
// 1. In line styling - curly braces, camelCase instead of hyphens, strings
// 2. Use 'className' instead of 'class' - avoids colision of js keyword class
// 3. JSX can very easily reference JS variables using {}
