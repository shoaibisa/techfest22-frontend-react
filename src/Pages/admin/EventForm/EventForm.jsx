import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown';
import { Form, Button } from 'react-bootstrap'
const EventForm = () => {
  return (
    <div className="main">
    <div className="container mt-5 pt-5" style={{width:'50%'}}>
    <div className="col-sm-12">
        <h2 style={{ color:'white'}}>Add Event</h2>
<Form>
            <Form.Group className="mb-3">
            <Form.Label style={{color:'white'}}>Name</Form.Label>
              <Form.Control  style={{ color:'white',background: 'transparent'}} size="sm"  type="text" placeholder="Enter Name *" required />
            </Form.Group>
              <Form.Group controlId="form.Textarea" className="mb-3">
            <Form.Label style={{color:'white'}}>Event Description</Form.Label>
        <Form.Control style={{ color:'white',background: 'transparent'}} as="textarea" rows={4} placeholder="Enter Description(max 50 words) *" required/>
        </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label style={{color:'white'}}>Uplode Image</Form.Label>
              <Form.Control    style={{background: 'transparent'}} type="file" size="sm" />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label style={{color:'white'}}>Uplode File</Form.Label>
              <Form.Control style={{background: 'transparent'}} type="file" size="sm" />
            </Form.Group>
            <div className=''style={{display:'flex' ,justifyContent: "space-between"}} >
            <Form.Group controlId="dob" className="mb-3">
                        <Form.Label style={{color:'white'}}>Start Date & Time</Form.Label>
                        <Form.Control style={{width:"270px"}} type="datetime-local" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                   
                    <Form.Group controlId="dob" className="mb-3">
                        <Form.Label style={{color:'white'}}>End Date & Time</Form.Label>
                        <Form.Control  style={{width:"270px"}} type="datetime-local" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                    </div>
            <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label style={{color:'white'}}>Faculty Coordinator</Form.Label>
          <Multiselect 
        //   onSelect={getstudentCoordinator}
          // onChange={getstudentCoordinator}
        //   options={dataC}
          displayValue="coordinator"
          showCheckbox="true"
        />
        </Form.Group>
         <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label style={{color:'white'}}>Student Coordinator</Form.Label>
          <Multiselect 
        //   onSelect={getstudentCoordinator}
          // onChange={getstudentCoordinator}
        //   options={dataC}
          displayValue="coordinator"
          showCheckbox="true"
        />
        </Form.Group>

         <Button
              style={{ width: '100%' }}
              variant="success"
              type="submit"
              block
            >
              Add Event
            </Button>
          </Form>
          </div>
          </div>
          </div>
  )
}

export default EventForm