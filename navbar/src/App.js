
import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactUs from './components/pages/ContactUs';
import Marketing from './components/pages/Marketing';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Consulting from './components/pages/Consulting';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Registration from './components/Registration';
import DisplayTable from './components/pages/DisplayTable';
import CreateApplication from './components/CreateApplication';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        //<Route exact path='/services' element={<Services />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/contactus' element={<ContactUs />} />
        <Route exact path='/marketing' element={<Marketing />} />
        <Route exact path='/consulting' element={<Consulting />} />
        <Route exact path='/sign-up' element={<SignUp />} />
        <Route exact path='/registration' element={<Registration />} />
        <Route exact path='/list' element={<DisplayTable />} />
        <Route exact path='/createapp' element={<CreateApplication />} />
      </Routes>
    </Router>
  );
}

export default App;
