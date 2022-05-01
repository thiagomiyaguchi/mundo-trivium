import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';
import PublicRouter from './components/PublicRouter';
import Fisica from './components/Fisica'
import FisicaUnidade1 from './components/FisicaUnidade1'
import FisicaUnidade2 from './components/FisicaUnidade2'
import FisicaUnidade3 from './components/FisicaUnidade3'
import FisicaUnidade4 from './components/FisicaUnidade4'
import FisicaCaderno2Unidade1 from './components/FisicaCaderno2Unidade1';
import FisicaCaderno2Unidade2 from './components/FisicaCaderno2Unidade2';
import CadernosFisica from './components/CadernosFisica'
import Quimica from './components/Quimica'
import QuimicaUnidade1 from './components/QuimicaUnidade1'
import QuimicaUnidade2 from './components/QuimicaUnidade2'
import QuimicaUnidade3 from './components/QuimicaUnidade3'
import QuimicaUnidade4 from './components/QuimicaUnidade4'
import QuimicaCaderno2Unidade1 from './components/QuimicaCaderno2Unidade1';
import Matematica from './components/Matematica'

import { GlobalStyle } from './GlobalStyle';
import './styles.css'



function App() {
  return (
    <>
   
      <GlobalStyle />
      
      <BrowserRouter>
        
        <PublicRouter path="/" component={Home} />
        <PrivateRoute path="/dashboard" component={Dashboard} />      
        <PrivateRoute path="/Fisica" component={Fisica} />   
        <PrivateRoute path="/FisicaUnidade1" component={FisicaUnidade1} />   
        <PrivateRoute path="/FisicaUnidade2" component={FisicaUnidade2} />  
        <PrivateRoute path="/FisicaCaderno2Unidade1" component={FisicaCaderno2Unidade1} />   
        <PrivateRoute path="/FisicaCaderno2Unidade2" component={FisicaCaderno2Unidade2} />  
        <PrivateRoute path="/FisicaUnidade3" component={FisicaUnidade3} />  
        <PrivateRoute path="/FisicaUnidade4" component={FisicaUnidade4} />  
        <PrivateRoute path="/CadernosFisica" component={CadernosFisica} />   
        <PrivateRoute path="/Quimica" component={Quimica} />   
        <PrivateRoute path="/QuimicaUnidade1" component={QuimicaUnidade1} />   
        <PrivateRoute path="/QuimicaUnidade2" component={QuimicaUnidade2} />   
        <PrivateRoute path="/QuimicaUnidade3" component={QuimicaUnidade3} />   
        <PrivateRoute path="/QuimicaUnidade4" component={QuimicaUnidade4} />   
        <PrivateRoute path="/QuimicaCaderno2Unidade1" component={QuimicaCaderno2Unidade1} />   
        <PrivateRoute path="/Matematica" component={Matematica} />   
              
      </BrowserRouter>

    
    </>
  );
}

export default App;
