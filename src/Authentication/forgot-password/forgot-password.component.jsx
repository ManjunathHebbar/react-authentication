import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './forgot-password.styles.scss';
import { connect } from 'react-redux'; 
import {passEmail} from '../../Redux/action/auth-action'

class ForgotPassword extends React.Component{
   constructor(props){
      super(props)
      this.state = {
          email:'',
          error:'',
          otp:'',
          showOTP: false,
          errorOTP: ''
      }
   }

   handleSubmit = (e) => {
      const {loginData} = this.props;
      this.props.passEmail(this.state.email)
      e.preventDefault();
      const result = loginData.filter((item)=> item.email === this.state.email)
      if(result.length > 0){
          this.setState({showOTP: true})
      }
      else{
         this.setState({error:'No such user'})
      }
   }

   handleChange = (e) => {
      this.setState({[e.target.id]:e.target.value,
      error:''})
      
   } 

   handleSubmitOTP = (e) => {
      e.preventDefault();
       this.state.otp === "9999" ? 
       this.props.history.push('/reset-password') :
       this.setState({errorOTP:'Wrong OTP'})
   }

   render(){
   return(

     <Form className="form">
         <Form.Group  className="form-group">
         <Form.Label>Email address</Form.Label>
      
         <Form.Control type="email" id="email" placeholder="Enter email" onChange={this.handleChange} disabled={this.state.showOTP}/>
         <Form.Text className="text-muted">
             We'll never share your email with anyone else.
         </Form.Text>
         </Form.Group>

         {this.state.showOTP === true &&
         
         <Form.Group  className="form-group">
         <Form.Label>OTP</Form.Label>
         <Form.Control type="number" id="otp" placeholder="Enter OTP" onChange={this.handleChange}/>
         </Form.Group>} 
   
         
         
         <p style={{color:'red', marginTop:'10px'}}>{this.state.showOTP ===false ? this.state.error : this.state.errorOTP }</p>


      
         <div className="button">
            <Button variant="primary" type="submit"  onClick={this.state.showOTP===false ? this.handleSubmit : this.handleSubmitOTP}>
               {this.state.showOTP === false ? 'Generate OTP' : 'Submit'}
            </Button>
         </div>
        </Form> 
   );

}
}

 const mapStateToProps = (state,props) => {
   const {loginData} = state;
    return {loginData}
};


export default connect(mapStateToProps,{passEmail})(ForgotPassword)