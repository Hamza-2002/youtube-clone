import React from 'react'
import './Css/Search.css';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
import Channel from './Channel'; 
import thum1 from '../images/thumbnail6.jpg'
import thum2 from '../images/thumbnail2.jpg'
import thum3 from '../images/thumbnail3.jpg'
import thum4 from '../images/thumbnail4.jpg'
import thum5 from '../images/thumbnail5.jpg'
import thum6 from '../images/thumbnail1.jpg'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import VideosRow from './VideosRow';
const Search = () => {
  return (
    <>
      <div className="Search">
        <div className="filter">
          <TuneSharpIcon className='filter_icon' />
          <h4>Filter</h4>
        </div>


        <hr />
      <div className="ChannelRow">

        <Channel
          Image = {thum1}
          ChannelName = "Clever Programmer"
          Verifed ={CheckCircleRoundedIcon}
          subscribe="1.23M"
          numbofvideos ="345"
          des = "You will find osma programing language nice to meet you buddy... "
          />

          </div>
        <hr />

        <div className="VideosRow">
          <h4>Latest from clever programmer</h4>
          <VideosRow 
          Image= {thum6}
          title="The Best Mobile Game zone"
          views="2.5k views"
          time=".7 days ago"
          channelImage={thum1}
          ChannelName = "clever programmer"
          Verifed = {CheckCircleRoundedIcon}

          des = "chatGPT took over the internet by storm and gained over 100 million  chatGPT took over the internet by storm and gained over 100 millionchatGPT took over the internet by storm and gained over 100 million "
          
          />
          <VideosRow 
          Image= {thum2}
          title="The Best Mobile Game zone"
          views="2.5k views"
          time=".7 days ago"
          channelImage={thum1}
          ChannelName = "clever programmer"
          Verifed = {CheckCircleRoundedIcon}

          des = "chatGPT took over the internet by storm and gained over 100 million  chatGPT took over the internet by storm and gained over 100 millionchatGPT took over the internet by storm and gained over 100 million "
          
          />
          <VideosRow 
          Image= {thum3}
          title="The Best Mobile Game zone"
          views="2.5k views"
          time=".7 days ago"
          channelImage={thum1}
          ChannelName = "clever programmer"
          Verifed = {CheckCircleRoundedIcon}

          des = "chatGPT took over the internet by storm and gained over 100 million  chatGPT took over the internet by storm and gained over 100 millionchatGPT took over the internet by storm and gained over 100 million "
          
          />
          <VideosRow 
          Image= {thum4}
          title="The Best Mobile Game zone"
          views="2.5k views"
          time=".7 days ago"
          channelImage={thum1}
          ChannelName = "clever programmer"
          Verifed = {CheckCircleRoundedIcon}

          des = "chatGPT took over the internet by storm and gained over 100 million  chatGPT took over the internet by storm and gained over 100 millionchatGPT took over the internet by storm and gained over 100 million "
          
          />
          <VideosRow 
          Image= {thum5}
          title="The Best Mobile Game zone"
          views="2.5k views"
          time=".7 days ago"
          channelImage={thum1}
          ChannelName = "clever programmer"
          Verifed = {CheckCircleRoundedIcon}

          des = "chatGPT took over the internet by storm and gained over 100 million  chatGPT took over the internet by storm and gained over 100 millionchatGPT took over the internet by storm and gained over 100 million "
          
          />
          <VideosRow 
          Image= {thum2}
          title="The Best Mobile Game zone"
          views="2.5k views"
          time=".7 days ago"
          channelImage={thum1}
          ChannelName = "clever programmer"
          Verifed = {CheckCircleRoundedIcon}

          des = "chatGPT took over the internet by storm and gained over 100 million  chatGPT took over the internet by storm and gained over 100 millionchatGPT took over the internet by storm and gained over 100 million "
          
          />
        </div>

       
      </div>

      


    </>
  )
}

export default Search