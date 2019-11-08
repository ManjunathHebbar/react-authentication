import React from 'react';
import Profile from '../images/user-dummy-pic.png';
import './home-page.styles.scss';
import {Link} from 'react-router-dom';
import Logout from '../images/sign-out-alt-solid.svg'
import SideNav from '../home-page/navbar-component'


class HomePage extends React.Component {
render(){
return(
    <div className="home">
        <div className="home-page">{this.topBar}
            <div className="top-nav">
                <div className="name">Name: Manjunath</div>
                <div><img className="profile-image" src={Profile} alt='profile'/></div>
                <div className="log-out">
                    <Link to='/'>
                        <div><img src={Logout} alt="Log-out"/></div>
                    </Link>
                </div>
                <Link to='/'>
                    <div className="log-out-text">Log-out</div>
                </Link>
            </div>     
        </div>
        <SideNav />
    </div>
    )
  }
}
export default HomePage