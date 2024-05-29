import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './screens/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';

import 'bootstrap';
import Signup from './screens/Signup';





function App() {

  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
     </Router>
    </>
  )
}

export default App
