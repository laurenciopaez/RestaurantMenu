//Centraliza todos los reducers
import {combineReducers} from 'redux'

//Importo los reducers que haya creado
import carritoReducer from './carritoReducer.js'
import busquedaReducer from './busquedaReducer.js'

const reducer = combineReducers({
    carrito: carritoReducer,   //Reducers para el carrito

     busqueda: busquedaReducer, //Sale en azul porque todavia no lo pidio la main

}) //La funcion que combina todos los reducers

export default reducer; 