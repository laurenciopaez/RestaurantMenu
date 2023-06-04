//CRUD ( "Crear, Leer, Actualizar y Borrar")

//BUSQUEDA

//CARRITO
import {
    DELETE,
    INCREMENT,
    DECREMENT,
    RESET,
} from '../../types';

export const eliminar = (nombre) => ({type: DELETE, payload: nombre})

export const sumar1  = (nombre) => ({type: INCREMENT, payload: nombre})

export const restar1 = (nombre) => ({type: DECREMENT, payload: nombre})

export const resetear = () => ({type: RESET})