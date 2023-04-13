import React from 'react'
import "../App.css";
import Header from './Header';
import Recomanded from './Recomanded';
import Sidebar from './Sidebar';
const Unique = () => {
  return (
   <>
        <Header />
     <div className="app_page">
         
          <Sidebar />
          <Recomanded />
       
      </div>
   </>
  )
}

export default Unique