import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';
import PublicRouter from './components/PublicRouter';
// import Video from './components/video';
import fisica from './components/fisica'
import CadernosFisica from './components/CadernosFisica'
import Quimica from './components/Quimica'
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
        <PrivateRoute path="/fisica" component={fisica} />   
        <PrivateRoute path="/CadernosFisica" component={CadernosFisica} />   
        <PrivateRoute path="/Quimica" component={Quimica} />   
        <PrivateRoute path="/Matematica" component={Matematica} />   
        <PrivateRoute path="/video" />            
      </BrowserRouter>

    
    </>
  );
}

export default App;
