import React from 'react'

const expevents = () => {
    function handleClick() {
        alert('Button clicked!');
    }
  return (
    <button onClick={handleClick}>Click me</button>
   
  );
}

export default expevents