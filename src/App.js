import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute';
import PublicRouter from './components/PublicRouter';
import Video from './components/video';
import './styles.css'

function App() {
  return (
    <>
   

    <BrowserRouter>
       <PublicRouter path="/" component={Home} />
       <PrivateRoute path="/dashboard" component={Dashboard} />      
       {/* <PrivateRoute path="/teste" component={Dashboard} />    */}
       <PrivateRoute path="/video" component={Video} />            
    </BrowserRouter>

    
    </>
  );
}

export default App;
