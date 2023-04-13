import React from 'react'
import { Avatar } from '@mui/material'
import styled from 'styled-components'


const VideoCard = ({ image, title, Avater, channel, timestamp, view }) => {
    const Wrapper = styled.section`
        .videocard{
            width:270px;
            margin-bottom:40px;
            transition:transform 0.6s ease-in-out ;
        }
        .videocard:hover{
            transform:scale(1.3)
        }
        .videocard_thumbnail{
            heigth:150px;
            width:250px;
        }
        .videocard_info{
            display:flex;
            margin-top:10px;
            padding-right:30px;
        }
        .video_text{
            margin-left:10px;
        }
        .video_text > h4{
            font-size:14px;
            margin-bottom:5px;
        }
        .video_text > p{
            font-size:14px;
            color:gray;
        }
       
    `
    return (
        <>
            <Wrapper>

                <div className="videocard">
                    <img src={image} alt="img" className='videocard_thumbnail' />

                    <div className="videocard_info">

                        <Avatar alt="Remy Sharp" src={Avater} className="videocard_avater" />

                        <div className="video_text">
                            <h4>{title}</h4>
                            <p>{channel}</p>
                            <p>{view} + {timestamp} </p>
                        </div>
                    </div>
                </div>


            </Wrapper>
        </>
    )
}

export default VideoCard