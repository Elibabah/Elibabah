import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, NavDropdown } from 'react-bootstrap';
import "./NavBarBootstrap.css"
import About from "./About"

export const NavBarBoot = () => {
    return(
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Elibabah</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link to={<About/>}>About me</Nav.Link>
      <Nav.Link href="#projects">My projects</Nav.Link>
      <Nav.Link href="#contact">My contact</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
        <ul id='ul'>
            <li><a id='linkOut' href='https://www.linkedin.com/in/elibabah/' target="_blank">LinkedIn</a></li>
            <li><a id='linkOut' href='https://github.com/Elibabah' target="_blank">GitHub</a></li>
        </ul>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  <br />
</>
    )

}
