import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/button';
import Stack from 'react-bootstrap/Stack';

import {sumar1, restar1} from '../redux/actions/index';
import { connect, useSelector } from 'react-redux';

const Seccion = ({key,id,nombre,descripcion,precio,route, sumar1, restar1}) => {

const img_source = require(`../images/${route}${id}.jpg`)

 const contador = useSelector(state => state.carrito.cart.quantity) //No anda

    return (
        <Col key={id}>
            <Card 
                style={{width: '60vw',margin: 'auto'}}
                border="secondary"
                className="text-bg-warning shadow p-3 mb-5 bg-body-tertiary rounded justify-content-center">
                <div style={{width: '90%', height: '10vh', margin: 'auto'}} className='mr-2 ml-2 flex mt-2'  >
                    <Card.Img variant='top' src={img_source} className="object-fit-cover overflow-hidden" style={{width: '100%', height: '100%'}}/>
                </div>
                
                <Card.Body className="user-select-none text-center overflow-auto">
                    <Card.Title className=''>{nombre}</Card.Title>
                    <Card.Text  >{descripcion}</Card.Text>
                    <Card.Text >{precio}</Card.Text>
                
                <Stack direction="horizontal"  gap={5} className='justify-content-center'>
                    <Button variant="outline-primary" onClick={() => {restar1(nombre)}}>-</Button>
                    <Card.Text> {contador}</Card.Text>
                    <Button variant="outline-primary" onClick={() => {sumar1(nombre)}}>+</Button>   
                </Stack>
                
                </Card.Body>
            </Card>
        </Col>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      sumar1: (nombre) => dispatch(sumar1(nombre)),
      restar1: (nombre) => dispatch(restar1(nombre)),
    };
  };
export default connect(null, mapDispatchToProps)(Seccion);
