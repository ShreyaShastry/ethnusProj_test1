import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function PatientRegistration() {
    const myStyle={
        maxWidth:'500px'
    }
  return (
    < div className='container' style={myStyle}>
    
    <Form>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter Mobile Number" />
        </Form.Group>
      </Row>
    
      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="abc@gmail.com" type="email"/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridDept">
          <Form.Label>Department</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Option 1</option>
            <option>Option 2</option>
          </Form.Select>
        </Form.Group>

    
    <Row className='mb-2'>
        <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Appointment Date</Form.Label>
            <Form.Control type='date' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTime">
            <Form.Label>Appointment Time</Form.Label>
            <Form.Control type='time' min="09:00" max="18:00"/>
        </Form.Group>

      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default PatientRegistration;
