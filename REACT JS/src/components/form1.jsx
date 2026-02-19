import React,{useState} from 'react'

function ControlledForm() {
  const [name, setName] = useState('');
  const handleChange=(event) => {
    setName(event.target.value);
  };
    const handleSubmit=(event) => {
        event.preventDefault();
        alert(`Hello ${name}!`);
    };
    return (
        <div>   ``
            <h2>Controlled Component Example</h2>
            <form onSubmit={handleSubmit}>
                <label>
                   Enter Your Name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {name && <p>Your name is: {name}</p>}
        </div>
    )
}

export default ControlledForm