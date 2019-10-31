import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom' 

class ResetPassword extends React.Component{
    render(){
        return(
            <div className="reset-password">
            <Form className="form">
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Link to="/">
                <div className="button">
                <Button variant="primary" type="submit">
                   Save Password
                </Button>
                </div>
                </Link>
            </Form>
            </div>
        )
    }
}
export default ResetPassword