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
import CadernosFisica from './components/CadernosFisica'
import Quimica from './components/Quimica'
import QuimicaUnidade1 from './components/QuimicaUnidade1'
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
        <PrivateRoute path="/FisicaUnidade3" component={FisicaUnidade3} />  
        <PrivateRoute path="/FisicaUnidade4" component={FisicaUnidade4} />  
        <PrivateRoute path="/CadernosFisica" component={CadernosFisica} />   
        <PrivateRoute path="/Quimica" component={Quimica} />   
        <PrivateRoute path="/QuimicaUnidade1" component={QuimicaUnidade1} />   
        <PrivateRoute path="/Matematica" component={Matematica} />   
              
      </BrowserRouter>

    
    </>
  );
}

export default App;
