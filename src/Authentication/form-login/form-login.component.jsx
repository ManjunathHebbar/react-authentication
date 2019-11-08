import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './form-login.styles.scss'
import {Link} from 'react-router-dom' 
import { connect } from 'react-redux'

class FormLogin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            error:'',
            showEroor:false
        }
    }

    handleChange = (e) => {
      this.setState({[e.target.id]:e.target.value,showEroor:false}) 
    }

    handleSubmit = (e) => {
       const {loginData} = this.props;
       e.preventDefault();
       const result = loginData.filter((item) => item.email === this.state.email)
       if(result.length > 0){
           if(result[0].password === this.state.password){
               this.props.history.push('/home-page')
           }
           else{
              this.setState({error:'password invalid', showEroor:true})
           }
        }
       else {
          this.setState({error:'invalid email'})
       }
    }

    render(){
        return(
         <div className="form-login">
             <Form className="form" >
                <h5 className="form-head">Login</h5>
                
                <Form.Group className="form-group">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control id="email" type="email" placeholder="Enter email" onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control  id="password" type="password"  placeholder="Enter Password" onChange={this.handleChange} />
                </Form.Group>
                

                {/* <Link to="/home-page"> */}
                <div className="button">
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    Login
                </Button>
                </div>
                {/* </Link> */}
                
                {this.state.showEroor === true && <p style={{color:'red', marginTop:'10px'}}>{this.state.error}</p>}
                
                <Link to='/forgot-password'>
                  <div className="forgot-password">Forgot Password</div>
                </Link>
            </Form>
        </div>
        );
    }
}

const mapStateToProps = (state,props) => {
       const {loginData} = state;
        return {loginData}
};

export default connect(mapStateToProps)(FormLogin);
