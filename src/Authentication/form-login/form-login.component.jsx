import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './form-login.styles.scss'
import {Link} from 'react-router-dom' 

class FormLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
      this.setState({[e.target.id]:e.target.value}) 
    }

    handleSubmit = (e) => {
       e.preventDefault();
       console.log(this.state)
    }
    render(){
        return(
         <div className="form-login">
            <Form className="form" onSubmit={this.handleSubmit}>
                <h5 className="form-head">Login</h5>
                
                <Form.Group controlId="formBasicEmail" className="form-group">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Enter email" onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  id="password" type="password" placeholder="Password" onChange={this.handleChange} />
                </Form.Group>

                {/* <Link to="/home-page"> */}
                <div className="button">
                <Button variant="primary" type="submit">
                    Login
                </Button>
                </div>
                {/* </Link>
                 */}
                <Link to='/forgot-password'>
                  <div className="forgot-password">Forgot Password</div>
                </Link>
            </Form>
        </div>
        );
    }
}
export default FormLogin;