import React from 'react';
import Profile from '../images/user-dummy-pic.png';
import './home-page.styles.scss';
import {Link} from 'react-router-dom';
import Logout from '../images/sign-out-alt-solid.svg'
import Doctors from '../doctors-page/doctors.components'
import NavBar from '../images/bars-solid.svg'
import { Transition } from 'react-transition-group';

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         hideDoctor:true,
         hidePatient:true,
         showNav:true,
        }
    }
   
    onClickDoctor=()=>{
    this.setState({hideDoctor:!this.state.hideDoctor})
    }

    openNav = () =>{
       this.setState({showNav:false})
    }

    closeNav = () =>{
        this.setState({showNav:true})
    }
    render(){
        return(
            <div className="home-page">
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

                <div className="nav-bar" onClick={this.openNav}>
                    <img src={NavBar} alt="nav-bar" width="30px" height="30px"></img>
                </div>
               
                    
                     

                {this.state.showNav === false &&
                    <ul className="sidenav">
                        <div className="closebtn" onClick={this.closeNav}>
                    &times;
                        </div>
                    <li>
                        <div className="Doctors" onClick={this.onClickDoctor}>Doctors</div>
                    </li>
                    <li>
                        <div className="patients" onClick={this.onClickPatients}>Patients</div>
                    </li>
                </ul>}
                  
                <div className="dummy" style={{marginLeft:this.state.showNav===false?'25%':'0%'}}>
                    {this.state.hideDoctor===false &&
                    <Doctors />}</div>   
                </div>
        )
    }
}
export default HomePage