import React from 'react'
import { trailor } from '../API_KEY/Api.jsx'
import YouTube from 'react-youtube'
import { useState } from 'react'
import axios from 'axios'
import Dialog from '@mui/material/Dialog';

function Movielist({ movie }) {

  const [moivetrailor, setmoivetrailor] = useState()
  const [open,setopen]=useState(false)
  function handleClose(){
    setopen(false)
  }

  async function playTrailor() {
    const trailors = await axios.get(trailor(movie.id))
    setmoivetrailor(trailors.data.results[0])
    setopen(true)

  }



  return (
    <>
    <div className="inline" onClick={playTrailor}>
      <div className="card" style={{ background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundSize: "cover" }}>
        <p className='undertitle'>{movie.title}</p>

      </div>
    </div>
    
      {moivetrailor &&
      <Dialog  open={open} onClose={handleClose} >
       <YouTube videoId={moivetrailor.key}/>
       </Dialog>}

        
    </>
  )
}

export default Movielist



///moive taken as props in the argument in curly bracket curley bracket used because the props is a object