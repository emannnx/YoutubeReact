import React from 'react';
import Video from '../assests/Video!.mp4';
import profile from '../assests/profile.jpg';
import Videopage from './Videopage';
import { Link } from 'react-router-dom'

const Bodyright = () => {
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
  const videos = [
    {
      id: 1,
      title: 'Tokyo Ghoul animation by Iman Olabode-Bello',
      channel: 'Anime GO',
      views: '178K views',
      time: '1 year ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },
    {
      id: 2,
      title: 'Tokyo Ghoul animation from Iman',
      channel: 'Anime GO',
      views: '188K views',
      time: '2 years ago',
      videoSrc: Video,
      profileImg: profile,
    },

  ];

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
          {videos.map((video) => (
           
              <Link to = 'Videopage'> 
               <div key={video.id} className="rightBodyContent">
              <video src={video.videoSrc} className="bodyVideo" controls></video>
              <div className="Captionn">
                <img src={video.profileImg} alt="profile" className="cationimg" />
                <div className="video-info" style={{ height: 120, width: 390 }}>
                  <h4>{video.title}</h4>
                  <p>{video.channel}</p>
                  <p>{video.views} • {video.time}</p>
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
