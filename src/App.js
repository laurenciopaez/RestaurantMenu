import Main from './modules/Main'

//legacy_store -> REDUX
import {Provider} from 'react-redux'
import store from './store'
import BarraNavegacion from './modules/BarraNavegacion';
import style from './BackgroundStyle.module.css'
import Container from 'react-bootstrap/Container'


function App() {
   return (
    <Provider store={store}>
    <div className={style.pageWrapper}>
      <div className={style.backgroundImage}> </div>   
        <Container>
          <BarraNavegacion/>
          <div><Main/></div>
        </Container>
        
          
    </div>
    </Provider>
  );
}

export default App;
