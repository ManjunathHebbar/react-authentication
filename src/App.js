import React from 'react';
import './App.css';
import FormLogin from './Authentication/form-login/form-login.component';
import {Route,Switch} from 'react-router-dom';
import ForgotPassword from './Authentication/forgot-password/forgot-password.component';
import ResetPassword from './Authentication/reset-password/reset-password.componet';
import HomePage from './home-page/home-page.component';
const App = () => {
    return( 
      <div>
        <Switch>
          <Route exact path="/" component={FormLogin}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route exact path="/reset-password" component={ResetPassword}/>
          <Route path="/home-page" component={HomePage}/>
        </Switch>
     </div>
    );
}
export default App;
