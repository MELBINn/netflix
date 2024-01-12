import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Action } from '../API_KEY/Api.jsx'
import axios from 'axios';
import { useEffect,useState } from 'react';


function Banner() {
 //set usestate
    const [banner,setbanner]=useState({})

  async function bannercalling(){
    let bannercall=await axios.get(Action)
    // console.log("banner",bannercall);
    setbanner(bannercall.data.results[0])
  }  
  useEffect(()=>{
    bannercalling(),[]
  })
    return (
        <div className="banner">
            <h1 className="h1">{banner && banner.title}</h1>
            <p className='banner-overview'>{banner && banner.overview}</p>
            <div className="buttons">
                <button className="play"><div><PlayArrowIcon /></div>play</button>
                <button className="button-more"><div><InfoOutlinedIcon /></div>more info</button>
            </div>
        </div>
    )
}

export default Banner