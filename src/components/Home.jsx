import React from 'react'
import NavBar from './NavBar'
import "../Home.css"
import Banner from './Banner'
import Movies from './Movies'
import { Action,Adventure,Animation,Comedy } from '../API_KEY/Api.jsx'
import { useEffect,useState } from 'react'
import axios from 'axios'
function Home() {
  const[image,setimage]=useState({})
async function callimage(){
  let images=await axios.get(Action)
  // console.log("images",images);
  setimage(images.data.results[0])

}
useEffect(()=>{
  callimage(),[]
})
  return (<>
    <div className="all">
      <div className='main' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${image.backdrop_path})`}}>
        <NavBar />
       
  
        <Banner  />
        

      {/* <div className="fog" > </div> */}
      </div>
      <Movies title="Horrer" url={Action}/>
      <Movies title="Adventure" url={Adventure}/>
      <Movies title="Animation" url={Animation}/>
      <Movies title="Comedy" url={Comedy}/>
    </div>



  </>


  )
}

export default Home