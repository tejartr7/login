import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Signup/>} ></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/' element={<User/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
