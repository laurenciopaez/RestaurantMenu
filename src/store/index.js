import {createStore} from 'redux';
import reducer from '../redux/reducer';

const store = createStore(reducer);

store.subscribe(()=> console.log(store)) //actualizacion del nuevo estado

export default store;