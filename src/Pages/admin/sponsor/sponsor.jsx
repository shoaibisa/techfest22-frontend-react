import { Form, Button } from 'react-bootstrap';

const Sponsor = () => {
  return (
    <>
      <div className="main">
        <div className="container mt-5 pt-5" style={{width:'50%'}}>
        <div className="col-sm-12">
            <h2 style={{ color:'white'}}>Add Sponsor</h2>
          </div>
              <Form>
                <Form.Group className="mb-3">
                <Form.Label style={{color:'white'}}>Name</Form.Label>
                  <Form.Control  style={{ color:'white',background: 'transparent'}} size="sm"  type="text" placeholder="Enter Name *" required />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label style={{color:'white'}}>Link</Form.Label>
                  <Form.Control   style={{ color:'white',background: 'transparent'}} size="sm"   type="text" placeholder="Enter Link *" required />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label style={{color:'white'}}>Uplode Image</Form.Label>
                  <Form.Control    style={{background: 'transparent'}} type="file" size="sm" />
                </Form.Group>
                <Button
                  style={{ width: '100%' }}
                  variant="success"
                  type="submit"
                  block
                >
                  Add Sponsor
                </Button>
              </Form>
            </div>
          </div>
       
    </>
  );
};

export default Sponsor;
