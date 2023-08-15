
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {Redirect} from 'react-router6-redirect'
import Home from './Pages/Home/home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Authenticate from './Pages/Authenticate/Authenticate';
import Activate from './Pages/Activate/Activate';
import Rooms from './Pages/Rooms/Rooms';

const isAuth=false;
const user={
  activate:false
}
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/"
         element={
          <GuestRoute> <Home/> </GuestRoute>   
         } exact
         /> 

        <Route path="/authenticate" 
        element={
          <GuestRoute> <Authenticate/> </GuestRoute>
        } exact
        />
         
         <Route path="/activate"
         element={
          <SemiProtected> <Activate/> </SemiProtected>
         } exact/>
        
         <Route path="/rooms"
         element={
          <Protected> <Rooms/> </Protected>
         } exact/>

      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute=({children})=>{
   return isAuth? (<Navigate to="/rooms" />):(children)
  
}

const SemiProtected=({children})=>
{
   return !isAuth?(<Navigate to="/" />):isAuth && !user.activate?(children):(<Navigate to="/rooms"/>);
}
export default App;

const Protected=({children})=>{
  return !isAuth?(<Navigate to="/" />):isAuth && !user.activate?(<Navigate to="/activate"/>):(children);
}


