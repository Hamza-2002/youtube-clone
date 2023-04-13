import React from 'react'
import './Css/Channel.css'

const Channel = ({Image ,  ChannelName , Verifed , subscribe ,numbofvideos,   des }) => {
  return (
   <>
    <div className="channelRow">
        <div className="channel_image">

        <img src={Image} alt="" />
        </div>
        <div className="channelRow_info">
            <div className="name-verifed">

            <h3>{ChannelName}</h3>
            <Verifed className="verfied-icon" />
            
            </div>

            <p>subscribers {subscribe } + numbers of videos {numbofvideos} </p>
            <p>{des}</p>
        </div>

    </div>
   </>
  )
}

export default Channel