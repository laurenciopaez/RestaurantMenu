import Nav from './modules/Navbar'
import Main from './modules/Main'

//legacy_store -> REDUX
import {Provider} from 'react-redux'
import store from './store'

function App() {
   return (
    <Provider store={store}>
    <div className='bg-light'>
      <div></div> {/* Cabecera */}
      <Nav/>
      <div><Main/></div> {/* main */}
    </div>
    </Provider>
  );
}

export default App;
