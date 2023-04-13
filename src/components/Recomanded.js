import React from 'react'
import './Css/Recomanded.css';
import VideoCard from './VideoCard';
import thumb1 from '../images/thumbnail1.jpg';
import thumb2 from '../images/thumbnail2.jpg';
import thumb3 from '../images/thumbnail3.jpg';
import thumb4 from '../images/thumbnail4.jpg';
import thumb5 from '../images/thumbnail5.jpg';
const Recomanded = () => {

    return (
        <>


            <div className="Recomanded">
                <h2>Recommended </h2>
                <div className="Recommended_videos">

                    <VideoCard image={thumb1} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb1} />
                    <VideoCard image={thumb2} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb2} />
                    <VideoCard image={thumb3} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb3} />
                    <VideoCard image={thumb4} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb4} />
                    
                    <VideoCard image={thumb5} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb5} 
                    />

<VideoCard image={thumb1} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb1} />
                    <VideoCard image={thumb2} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb2} />
                    <VideoCard image={thumb3} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb3} />
                    <VideoCard image={thumb4} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb4} />
                    
                    <VideoCard image={thumb5} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb5} 
                    />

<VideoCard image={thumb1} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb1} />
                    <VideoCard image={thumb2} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb2} />
                    <VideoCard image={thumb3} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb3} />
                    <VideoCard image={thumb4} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb4} />
                    
                    <VideoCard image={thumb5} title="Design your youtube thumbanil" channel="Logo Members" timestamp="3 days ago" view="2.3M Views" Avater={thumb5} 
                    />
                    
                </div>
            </div>

        </>
    )
}

export default Recomanded