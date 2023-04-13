import React from 'react'
import { Avatar } from '@mui/material'
import './Css/VideoRow.css';

const VideosRow = ({ Image, title, views, time, Verifed, channelImage, des, ChannelName }) => {
    return (
        <>
            <div className="VideosRow-section">
                
                <div className="VideosRow-image">
                    <img src={Image} alt="img" />
                </div>

                <div className="VideosRow-info">
                    <h3>{title}</h3>
                    <p>{views}{time}</p>
                    
                    <div className="VideosRow-info-nested">

                        <Avatar alt="Remy Sharp" src={channelImage} />
                        <p>{ChannelName}</p>
                        <Verifed className="Verified" />
                    </div>

                    <p>{des}</p>


                </div>
            </div>
        </>
    )
}

export default VideosRow