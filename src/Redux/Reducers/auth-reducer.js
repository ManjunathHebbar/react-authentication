import {RESET_PASSWORD, PASS_EMAIL} from '../constants/types'


const initialState = {
    loginData: [{email:"manju@gmail.com",password:"Manju@1234"},
              {email:"malli@gmail.com",password:"Malli@1234"},
              {email:"harshad@gmail.com",password:"Harshad@1234"},
              {email:"venu@gmail.com",password:"Venu@1234"}],
    
    email: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASS_EMAIL:
    return {
      ...state,
      email : action.payload
    }

    case RESET_PASSWORD: 
      var ind=null;
      const loginDataTest = state.loginData
      state.loginData.map((item,index) =>
      {
         if(item.email===state.email){
           ind=index
      
      loginDataTest[ind].password = action.payload;
           return ind
         }
        return null
      })

    return {
      ...state,
      loginData:loginDataTest
    }
    
    default:
      return state
    }
    
}
  
export default authReducer;