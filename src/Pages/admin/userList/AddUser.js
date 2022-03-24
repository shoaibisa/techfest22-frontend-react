import { Form, Button } from "react-bootstrap";
const AddUser = () => {
  return (
    <>
    
      <Form>
        <Form.Group  className="mb-3">
          <Form.Control type="text" placeholder="Name *" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Email *" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" placeholder="Address *" row={3} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Phone *" required />
        </Form.Group>
        
          <Button  style={{width:'100%'}} variant="success" type="submit" block>
            Add New User
          </Button>
        
      </Form>
    </>
  );
};
export default AddUser;
