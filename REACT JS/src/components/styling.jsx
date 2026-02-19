import React from 'react'

function styling() {
  
    // <h1 style={{ color: 'blue', fontSize: '24px', backgroundColor: 'lightgray' }}>This is styled using inline css</h1>
    const headingStyle = {
        color: 'blue',
        fontSize: '24px',
        backgroundColor: 'lightgray',
        padding: '10px',
    };
    return<h1 style={headingStyle}>This is styled using inline css</h1>;
  
}

export default styling