import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { eliminar } from '../redux/actions';

const Carrito = ({nombre, precio, quantity, eliminar}) => {
    return (
        <>
        <Stack direction="horizontal" className='border' gap={3}>
            <div>{nombre}</div>
            <div >{precio}</div>
            <div className='ms-auto'>{quantity}</div>
            <div className="vr" />
            <Button onClick={() => {eliminar(nombre)}}>Delete</Button>
        </Stack>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        eliminar: (nombre) => dispatch(eliminar(nombre))
    };
};
export default connect(null, mapDispatchToProps)(Carrito)