import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/button';
import Stack from 'react-bootstrap/Stack';

import {sumar1, restar1} from '../redux/actions/index';
import { connect, useSelector } from 'react-redux';
import React, { useState } from 'react';

const Seccion = ({key,id,nombre,descripcion,precio,route, sumar1, restar1}) => {

const img_source = require(`../images/${route}${id}.jpg`)

const cart = useSelector(state => state.carrito.cart) 

const handleImageClick = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };
const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    return (
        <Col key={id}>
        {isImageEnlarged
        ? ( <Card style={{width: '75vw', height: '50vh', margin: 'auto'}} className='mr-2 ml-2 flex mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <Card.Img src={img_source} className="object-fit-cover overflow-hidden" style={{width: '100%', height: '100%'}} onClick={handleImageClick} />
            </Card>
        ) : ( 
        <Card 
            style={{width: '60vw',margin: 'auto'}}
            border="secondary"
            className="text-bg-warning shadow p-3 mb-5 bg-body-tertiary rounded justify-content-center">
            <div style={{width: '90%', height: '10vh', margin: 'auto'}} className='mr-2 ml-2 flex mt-2'  >
                <Card.Img variant='top' src={img_source} className="object-fit-cover overflow-hidden" style={{width: '100%', height: '100%'}} onClick={handleImageClick}/>
            </div>
            
            <Card.Body className="user-select-none text-center overflow-auto">
                <Card.Title className=''>{nombre}</Card.Title>
                <Card.Text  >{descripcion}</Card.Text>
                <Card.Text >{precio}</Card.Text>
            
            <Stack direction="horizontal"  gap={5} className='justify-content-center'>
                <Button variant="outline-primary" onClick={() => {restar1(nombre)}}>-</Button>
                
                {cart.map( (item ) => {
                    return item.nombre === nombre
                    ? <Card.Text style={{marginBottom: '0px'}}>{item.quantity}</Card.Text>
                    : <></>
                })} 
                <Button variant="outline-primary" onClick={() => {sumar1(nombre)}}>+</Button>   
            </Stack>
            
            </Card.Body>
        </Card>
    
    )}
    </Col>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      sumar1: (nombre) => dispatch(sumar1(nombre)),
      restar1: (nombre) => dispatch(restar1(nombre)),
    };
  };
  const mapStateToProps = (state) => {
    return {
        cart: state.carrito.cart ,
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Seccion);
