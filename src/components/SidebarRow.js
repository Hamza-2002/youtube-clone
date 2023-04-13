import React from 'react'

import './Css/SidebarRow.css';
const SidebarRow = ({title , Icon ,Selected}) => {
  return (
 <>
    <div className={`side_bar_row ${Selected && "selected"}`}>
        <Icon className='sidebarrow_icon'/>
        <h1 className='sidebarrow_title'>{title}</h1>
    </div>
 </>
  )
}

export default SidebarRow