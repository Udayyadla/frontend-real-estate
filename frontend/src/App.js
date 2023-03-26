
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/LoginRegister/Signin';
import Signup from './components/LoginRegister/Signup';
import Home from "./components/Dashboard/Home";
import PageBasic from './components/AddPropertyPage/PageBasic';
import PageGenInfo from './components/AddPropertyPage/PageGenInfo';
import PageLocationInfo from './components/AddPropertyPage/PageLocationInfo';
import PrivateComponent from './components/AddPropertyPage/PrivateComponent';
import PagePropertyDetails from './components/AddPropertyPage/PagePropertyDetails';
function App() { 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>

            <Route path='/properties' element={<Home />} />
            <Route path='/basic' element={<PageBasic />} />
            <Route path='/details' element={<PagePropertyDetails />} />
            <Route path='/general' element={<PageGenInfo />} />
            <Route path='/location' element={<PageLocationInfo/>} />
          </Route>

          <Route path='/' element={<Signin />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/register' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
