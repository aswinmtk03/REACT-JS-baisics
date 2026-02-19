import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'


function NewApp() {
const [name, setName] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}`);
  }
  return (
    <div className='container mt-5'>
        <h2>Bootstrap Form Example</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  )
}

export default NewApp