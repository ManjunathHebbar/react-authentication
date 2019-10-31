import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './forgot-password.styles.scss';
import {Link} from 'react-router-dom'; 

const ForgotPassword = () => {
   return(
     <Form className="form">
     <Form.Group controlId="formBasicEmail" className="form-group">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" />
         <Form.Text className="text-muted">
             We'll never share your email with anyone else.
         </Form.Text>
         
     </Form.Group>
     <Link to="/reset-password">
        <div className="button">
          <Button variant="primary" type="submit">
             Change Password
          </Button>
        </div>
      </Link>
     </Form>
    );
 }

export default ForgotPassword