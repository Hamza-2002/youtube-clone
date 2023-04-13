import React ,{useState} from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Css/Header.css'
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
const Header = () => {
  const [InputSearch , SetInputSearch] = useState("");

  function handleChange(e){
    SetInputSearch(e.target.value)
  }
   
  return (
    <>
 

      <nav>
        <div className="header-left">
            <MenuIcon className='menuicon'/>
            <Link to={"/"} className="image" > 
            <img src={logo} alt="youtube logo" />
            </Link>
        </div>
        <div className="header-input">
            <input type="text" placeholder='Search'  value={InputSearch} onChange={handleChange}  />
            <Link to={`/search/${InputSearch}`} className="header-search-icon">
            < SearchIcon className='searchicon' />
            </Link>
        </div>

        <div className="header-icons">
            <VideoCallIcon className='videoicon icon' />
            <NotificationsIcon className='notificationicon icon' />
            <Avatar sx={{ bgcolor: deepOrange[500] }} className="icon profile" >H</Avatar>
        </div>
      </nav>
  
    </>
  )
}

export default Header