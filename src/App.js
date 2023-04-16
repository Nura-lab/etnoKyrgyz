import React from "react";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import SignUp from './components/signUp/signUp'
import Login from  './components/login/login'
// import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from "./components/Menu/menu";
import Public from "./components/PopularItems/Publick/public"
import Tradional from './components/Tradional/Tradional'
import About from './components/About/about'
import Home from './components/Home';
import ActionAreaCard from './components/ActionAreaCard/index'



function App() {
  
  return  <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/user" element={<UserProfile/>} /> */}
          <Route exact path="Login" element={<Login />} />
          <Route exact path="Menu" element={<Menu />} />
          <Route exact path="Public" element={<Public />} />
          <Route exact path="SignUp" element={<SignUp />} />
          <Route exact path="ActionAreaCard" element={<ActionAreaCard/>}/>
          
        </Routes>
        
      </Router>
    </div>

  
    
  
}

export default App;
