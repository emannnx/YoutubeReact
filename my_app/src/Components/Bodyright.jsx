import React, { useEffect, useState } from 'react';
import Video from '../assests/Video!.mp4';
import profile from '../assests/profile.jpg';
import Videopage from './Videopage';
import { Link } from 'react-router-dom'
import { get_popular_videos } from '../Apis/Api';
import moment from 'moment';

const Bodyright = () => {

  const [vids,setVids] = useState([])

  // Rendring the videos api
  useEffect(()=>{
    const fetch_videos = async()=>{
      try{
        const response = await get_popular_videos();
      setVids(response)
      } catch(error){
        console.error(error);
      }
    } 

    fetch_videos()
  })
  // Menu items for the header
  const menuItems = [
    { id: 1, name: 'Source Code' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Gaming' },
    { id: 4, name: 'Sports' },
    { id: 5, name: 'Entertainment' },
    { id: 6, name: 'History' },
    { id: 7, name: 'Playlists' },
    { id: 8, name: 'Subscription' },
    { id: 9, name: 'Apple' },
    { id: 10, name: 'Google' },
    { id: 11, name: 'Music' },
    { id: 12, name: 'Love' },
    { id: 13, name: 'JYP' },
    { id: 11, name: 'GYM' },
    { id: 11, name: 'Drawing' },
    { id: 11, name: 'Lana' },
  ];

  // Video content array


  return (
    <div className="right-body">
      <div className="innerRightBody">

        {/* Menu header */}
        <div className="rightBodyHead">
          <button className="select"><b>All</b></button>
          {menuItems.map((item) => (
            <button key={item.id} className="selects"><b>{item.name}</b></button>
          ))}
        </div>

        {/* Video content */}
        <div className="video-content">
          {vids?.map((video) => (
           
              <Link to = {`/${video.id}`} style={{textDecoration:"none"}}> 
               <div key={video.id} className="rightBodyContent">
              <img src={video?.snippet?.thumbnails?.high?.url} className="bodyVideo" />
              <div className="Captionn">
                <img src={video?.snippet?.thumbnails?.high?.url} alt="profile" className="cationimg" />
                <div className="video-info" style={{ height: 120, width: 390 }}>
                  <h4>{video?.snippet?.description.slice(0,70)}</h4>
                  <p>{video?.snippet?.channelTitle}</p>
                  <p> 345k • {moment(video?.snippet?.publishedAt).fromNow()}</p>
                </div>
              </div>
            </div>
           </Link>

          ))}
        </div>

      </div>
    </div>
  );
};

export default Bodyright;
