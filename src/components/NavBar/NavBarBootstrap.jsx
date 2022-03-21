import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./NavBarBootstrap.css"

export const NavBarBoot = () => {
    return(
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>

  <Navbar.Brand><Link className="changed" to="/elibabah"><img src="https://raw.githubusercontent.com/Elibabah/elibabah/release/public/code.png" alt="imageHome" className='imgHome'/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="me-auto">
      <Nav.Link><Link className="changed" to="/about">About me</Link></Nav.Link>
      <Nav.Link><Link className="changed" to="/projects">My projects</Link></Nav.Link>
      <Nav.Link><Link className="changed" to="/contact">Contact me</Link></Nav.Link>
    </Nav>
    
    <Nav>
        <ul id='ul'>
            <li><a id='linkOut' href='https://www.linkedin.com/in/elibabah/' target="_blank"><LinkedInIcon sx={{ fontSize: 31 }}/></a></li>
            <li><a id='linkOut' href='https://github.com/Elibabah' target="_blank"><GitHubIcon sx={{ fontSize: 31 }}/></a></li>
        </ul>
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )

}