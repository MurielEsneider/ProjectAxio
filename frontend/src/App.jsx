import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login';
import Registro from './Registro';
import Recuperar from './recuperar';
import Codigo from './codigo'
import Home from './Home';
import Users from './users';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  console.log(location)

  return (
    <div className='contenedor'>
      <Routes location={background || location}>
        <Route index element={<Login/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path='/Recuperar' element={<Recuperar />} />
        <Route path='/Codigo' element={<Codigo />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Users' element={<Users/>} />
      </Routes>
    </div>
  );
}

export default App;