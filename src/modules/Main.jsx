import React from 'react';
import Seccion from './Seccion.jsx';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {connect} from 'react-redux'  //Permite accedecer al estado global
//import { eliminar, sumar1, restar1, resetear} from '../redux/actions/index.js'
import { resetear } from '../redux/actions/index.js';
//Carrito card
import Carrito from './carrito.jsx'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false,
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.scrollTop = this.scrollTop.bind(this)
    }

    handleClose = () => {
        this.setState({ show: false });
        
      }
    
    handleShow = () => {
        this.setState({ show: true });
      }

    scrollTop =() => {
        document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
      }
    

    render(){
        
        const { show } = this.state;
        const { porciones, hamburguesas, cerveceria, cart } = this.props;
        return(
            <div>
                {/* Botones */}

                <div className="d-grid gap-2 col-6 mx-auto bottom-0 start-50 translate-middle-x position-fixed " style={{zIndex:'1030'}}>
                    <Button onClick={this.handleShow} className=" btn-lg btn-primary">
                        Pedido
                    </Button>
                    <Button className='btn-lg btn-primary' onClick={this.scrollTop}>
                        Subir
                    </Button>
                </div>


                {/* Slider */}

                <Offcanvas show={show} onHide={this.handleClose} placement='end' >
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Pedido</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                         {cart.map( (el) =>(
                            <Carrito
                                nombre = {el.nombre}
                                precio = {el.precio}
                                quantity = {el.quantity}
                            />
                        ))}
                        
                        <Button className='position-absolute bottom-0 start-50 translate-middle' onClick={()=> {this.props.resetear(); this.handleClose()}}>Reset</Button>

                    </Offcanvas.Body>
                </Offcanvas>

                {/* Seccion menu */}

                <div style={{height: '10vh'}}></div>

                    <Navbar bg="dark" variant="dark" className='mb-4 scroll' id='top'>
                        <Container id='cervezas'>
                        <Navbar.Brand >Cervezas</Navbar.Brand>
                        </Container>
                    </Navbar>
                  <Row xs={1} md={1} className="g-1">
                    {cerveceria.map((el) => (      
                    <Seccion
                        key= {el.id}
                        id={el.id}
                        nombre ={el.nombre}
                        descripcion = {el.descripcion}
                        precio = {el.precio}
                        route = 'cervezas/cerveza'
                    />
                 ))}

                    <Navbar bg="dark" variant="dark" className='mb-4' >
                        <Container id='hamburguesas'>
                        <Navbar.Brand>Hamburguesas</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Row> 
                <Row xs={1} md={1} className="g-1">
                    {hamburguesas.map(el => (      
                    <Seccion
                        key= {el.id}
                        id={el.id}
                        nombre ={el.nombre}
                        descripcion = {el.descripcion}
                        precio = {el.precio}
                        route = 'hamburguesas/burger'
                    />
                 ))}
                    <Navbar bg="dark" variant="dark" className='mb-4'>
                        <Container id='papas-fritas'>
                            <Navbar.Brand >Papas Fritas</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Row>
                 <Row xs={1} md={1} className="g-1">
                    {porciones.map(el => (      
                    <Seccion
                        key= {el.id}
                        id={el.id}
                        nombre ={el.nombre}
                        descripcion = {el.descripcion}
                        precio = {el.precio}
                        route = 'papas_fritas/papas' 
                    />
                 ))}
                </Row> 
                <div style={{height: '15vh'}}></div>
            </div>
        )
    }
}

// Función que mapea el estado de Redux a las props del componente
const mapStateToProps = (state) => {
    return {
        cart: state.carrito.cart ,
        cerveceria: state.carrito.cerveceria,
        hamburguesas: state.carrito.hamburguesas,
        porciones: state.carrito.porciones,
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
        resetear: () => dispatch(resetear()),
    };
};
// Conectar el componente a Redux usando el HOC connect
export default connect(mapStateToProps, mapDispatchToProps)(Main);

/* UseSelector para componentes de funcion */
