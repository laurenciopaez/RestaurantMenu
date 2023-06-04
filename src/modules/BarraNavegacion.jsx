import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import {useState} from 'react'

const BarraNavegacion = () => {
  
 const [expanded, setExpanded] = useState(false);

const handleToggle = () => {
  setExpanded(!expanded);
};


const scrollSwitch =(id) => {
  switch (id) {
    case 'cervezas': 
      document.getElementById('cervezas').scrollIntoView({ behavior: 'smooth' });
    break;
    case 'hamburguesas': 
      document.getElementById('hamburguesas').scrollIntoView({ behavior: 'smooth' });
    break;
    case 'papas-fritas': 
      document.getElementById('papas-fritas').scrollIntoView({ behavior: 'smooth' });
    break;
    default: {
      
    }
  }
;}

    return(
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand href="https://www.cervezaantares.com/" target="_blank">
          Antares Bar Menu - Antares
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => {scrollSwitch('cervezas'); handleToggle()}} style={{ color: 'white', marginLeft: '15px' }}>
              Cervezas
            </Nav.Link>
            <Nav.Link onClick={() => {scrollSwitch('hamburguesas'); handleToggle()}} style={{ color: 'white', marginLeft: '15px' }}>
              Hamburguesas / Comida
            </Nav.Link>
            <Nav.Link onClick={() => {scrollSwitch('papas-fritas'); handleToggle()}} style={{ color: 'white', marginLeft: '15px' }}>
              Papas fritas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default BarraNavegacion;