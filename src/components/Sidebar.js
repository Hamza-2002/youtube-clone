import React from 'react'
import './Css/Sidebar.css'
import SidebarRow from './SidebarRow'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Sidebar = () => {
 
  return (
    <>
  

        <div className="side-bar">
            <SidebarRow Selected title="Home" Icon={HomeIcon } />
            <SidebarRow title ="Trending" Icon={WhatshotIcon } />
            <SidebarRow title="Subscritpion"Icon={SubscriptionsIcon } />
            <hr  className='hr'/>
            <SidebarRow title="Library"Icon={VideoLibraryIcon } />
            <SidebarRow title="History"Icon={HistoryIcon } />
            <SidebarRow title="Your video"Icon={VideoSettingsIcon } />
            <SidebarRow title="Watch Later"Icon={WatchLaterIcon } />
            <SidebarRow title="Liked Video"Icon={ThumbUpOffAltIcon } />
            <SidebarRow title="show more"Icon={KeyboardArrowDownIcon } />
            <hr  className='hr'/>
        </div>
  
    </>
  )
}

export default Sidebar