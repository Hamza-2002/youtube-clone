import React from 'react'
import Search from './Search'
import Sidebar from './Sidebar';
import './Css/SearchPage.css';
import Header from './Header';

const SearchPage = () => {
  return (
    <>
      <Header />
      <div className="Search_page">

        <Sidebar />
        <Search />

      </div>
    </>
  )
}

export default SearchPage