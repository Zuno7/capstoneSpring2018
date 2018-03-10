//React
import React,{ Component } from 'react'

//Components
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'

//css
import '../css/Heading.css'
class Heading extends Component{
    render(){
        return(
<div id="heading-container">            
  <Navbar  fixedTop  collapseOnSelect className="navbar-banner">
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-words" to="/home">Roommates 50+</Link>
        <Link className="navbar-words" to="/home"></Link>
        
      </Navbar.Brand>
    </Navbar.Header>
    <Nav pullRight>
      <NavItem >
        <Link className="navbar-words" to="/">Events</Link>
      </NavItem>
      <NavDropdown   title="Welcome User" id="basic-nav-dropdown"  >
        <MenuItem >
        <Link to="/editProfile">Edit Profile</Link>
        </MenuItem>
        <MenuItem >
          <Link to="/accountInfo">Account Information</Link>
        </MenuItem>
        <MenuItem divider />
        <MenuItem >
          <Link to="/login">Log off</Link>
        </MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
</div>
        );
    }
}

export default Heading