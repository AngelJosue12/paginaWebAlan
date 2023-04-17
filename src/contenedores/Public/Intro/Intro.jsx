import React from 'react'
import './Intro.css';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs';
import { useState } from 'react';
import { videoo } from '../../../constantes';

export default function Intro() {
  
  const[playVideo,setPlayVideo] = useState(false);
   const vidRef = React.useRef();
  const handleVideo= () =>{
    setPlayVideo((prevPlayVideo)=> !prevPlayVideo);
        if(playVideo)
        {
            vidRef.current.pause();
        }else{
          vidRef.current.play();
        }
   }
 
  return(
  <div className='app__video'>
    <video 
      src={videoo}
      ref={vidRef}
      type="video/mp4"
      loop
      controls={false}
            muted
    />

    <div className='app__video-overlay flex__center'>
          <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
              {
              playVideo 
              ? 
                <BsPauseFill color='#fff' fontSize={30}/>
              : 
                <BsFillPlayFill color='#fff' fontSize={30}/>
              }

          </div>
    </div>
  </div>
  )
}
