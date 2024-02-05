import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Action } from '../API_KEY/Api.jsx'
import axios from 'axios'
import Movielist from './Movielist.jsx'
import SingleMovieCard from './Movielist.jsx'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


//get url from home component
function Movies({ title, url }) {

    const [movie, setmovie] = useState()
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const Listref = useRef()


    async function FetchApi() {
        const calling = await axios.get(url)
        setmovie(calling.data.results)
        console.log("title", calling.data.results);
    }
    useEffect(() => {
        FetchApi()
    }, [])



    return (

        <div className="cards" >

            <p className="h12">{title}</p>
            {/* <ArrowBackIosNewIcon className='scrollback'  onClick={()=>handleClick("left")}/> */}
            <div className="card1 " ref={Listref} >

                {movie && movie.map((m) => {
                    return (
                        <SingleMovieCard movie={m} />
                    )
                })}

            </div>
            {/* <ArrowForwardIosIcon className='forward' onClick={()=>handleClick("right")}/> */}

        </div>

    )
}

export default Movies




// this conatin a div which have card to map function ,the componenet of a single card item in the "singlemoivecard" file