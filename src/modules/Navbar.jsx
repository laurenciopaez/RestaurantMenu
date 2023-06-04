import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {

    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="https://www.cervezaantares.com/" target='_blank' className='justify-content-center'>Antares Bar Menu - Antares</Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Nav;