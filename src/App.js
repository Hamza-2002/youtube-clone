import './App.css';
import Header from './components/Header';
import Unique from './components/Unique';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SearchPage from './components/SearchPage';
import { useState } from 'react';

function App() {
 

  return (

    <>
       <BrowserRouter>

         {/* <Header />  */}

        <Routes>
          <Route path='/' element={<Unique />} />
          <Route path='/search/:searchTerm' element={<SearchPage />} />

        </Routes>
      </BrowserRouter> 
   

    </>

  );
}

export default App;
