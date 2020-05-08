import React from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Doctors from '../doctors-page/doctors.components'
import NavBar from '../images/bars-solid.svg'
import './navbar.styles.scss'
import Patients from '../patients-page/patients.components'

class SideNav extends React.Component {
constructor(props){
    super(props)
    this.state = {
        showNav:true,
        hideDoctor:true,
        hidePatient:false,
    }
}

onClickDoctor = () => {
    this.setState({hidePatient:false,hideDoctor:true})
    }

openNav = () => {
    this.setState({showNav:false})
}

closeNav = () => {
    this.setState({showNav:true})
}
 
onClickPatients = () => {
    this.setState({hidePatient:true ,hideDoctor:false})
}

 render(){
  return(
    <React.Fragment>
    <div className="nav-bar" onClick={this.state.showNav ? this.openNav : this.closeNav}>
    <img src={NavBar} alt="nav-bar" width="25px" height="25px"></img>
    </div>
   
    {this.state.showNav === false &&
    <TransitionGroup>
        <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="navbar"
            >
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
        </ul>
        </CSSTransition>
    </TransitionGroup>}

    <div className="dummy" style={{marginLeft:this.state.showNav===false?'150px':'0%'}}>
        {this.state.hideDoctor===true &&
        <Doctors />}
        {this.state.hidePatient === true &&
        <Patients />}
    </div>   
 </React.Fragment>
)
}
}

export default SideNav