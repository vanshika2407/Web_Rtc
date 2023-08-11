
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/home';
import Register from './Pages/Register/Register';
import Navigation from './Components/Shared/Navigation/Navigation'
import Login from './Pages/Login/Login'
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} exact /> 
        <Route path="/register" element={<Register/>} exact/>
        <Route path="/login" element={<Login/>} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
