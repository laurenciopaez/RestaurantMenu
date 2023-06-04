//GESTION DE ACTIONS
import {DELETE,INCREMENT,DECREMENT,RESET} from '../../types';
import cerveceria from '../../utils/data_cervezas.js';
import hamburguesas from '../../utils/data_combos.js';
import porciones from '../../utils/data_porciones.js';

const initialState = {
    cerveceria,
    hamburguesas,
    porciones,
    cart: [],
} 

export default function carritoReducer(state=initialState , action) {

    switch (action.type){

        case INCREMENT:
            {   
                let newItem

                let newItem1 = state.cerveceria.find( (item) => item.nombre === action.payload);
                     
                let newItem2 = state.hamburguesas.find( (item) => item.nombre === action.payload);
                 
                let newItem3 = state.porciones.find( (item) => item.nombre === action.payload);

                if(newItem1 !== undefined) {
                    newItem = newItem1
                } else if (newItem2 !== undefined) {
                    newItem = newItem2
                } else {
                    newItem = newItem3
                }

                let itemInCart = state.cart.find( (item) => item.nombre === newItem.nombre); 

                return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) => 
                    item.nombre === newItem.nombre
                    ? {...item, quantity: item.quantity +1}
                    : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, {...newItem, quantity: 1}],

                }
            }
        case DECREMENT:{
            let itemToDelete = state.cart.find( (item ) => item.nombre === action.payload)
            if (itemToDelete === undefined) {
                return state
            }
            return itemToDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map( (item) => 
                item.nombre === action.payload
                ? {...item, quantity: item.quantity-1}
                : item)
                
            }
            : {
                ...state,
                cart: state.cart.filter( (item) => item.nombre !== action.payload)
            }
        }
        case DELETE:
            return {
                ...state,
                cart: state.cart.filter( (item) => item.nombre !== action.payload)
            }
        case RESET:
            return initialState
            
        default:
            return state;
    }

}