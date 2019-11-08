import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import {Link} from 'react-router-dom' 
import { connect } from 'react-redux'; 
import {resetPassword} from '../../Redux/action/auth-action'
class ResetPassword extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newPassword:'',
            confirmPassword:'',
            error:'',
            showError:false
        }
    }
    
    handleChange = (e) => {
      this.setState({[e.target.id]:e.target.value, showError:false})
    }
   
    passwordVarification = () => {
        let val = this.state.newPassword
        this.props.history.push('/') 
        this.props.resetPassword(val)
    }

    handleClick = (e) => {
        e.preventDefault();
        if(this.state.newPassword === this.state.confirmPassword){
           this.passwordVarification()
        }
        else {
             this.setState({error:"password don't match", showError:true})
        }
    }


    render(){
        return(
            <div className="reset-password">
            <Form className="form">
                <Form.Group>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" id="newPassword"  placeholder="Password" onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                       Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
                    </Form.Text>
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" id="confirmPassword" placeholder="Password" onChange={this.handleChange} />
                </Form.Group>

                {this.state.showError === true && <p style={{color:'red'}}>{this.state.error}</p>}
                
                {/* <Link to="/"> */}
                <div className="button">
                <Button variant="primary" type="submit" onClick={this.handleClick}>
                   Save Password
                </Button>
                </div>
                {/* </Link> */}
            </Form>
            </div>
        )
    }
}


export default connect(null ,{resetPassword})(ResetPassword);