import React from 'react'
import { useEffect, useState ,useRef} from 'react'
import { Action } from '../API_KEY/Api.jsx'
import axios from 'axios'
import Movielist from './Movielist.jsx'
import SingleMovieCard from './Movielist.jsx'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

 

function Movies({title,url}) {

    const [movie, setmovie] = useState()
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

const Listref=useRef()
 

    async function FetchApi() {
        const calling = await axios.get(url)
        setmovie(calling.data.results)
        console.log("title", calling.data.results);
    }
    useEffect(() => {
        FetchApi()
    }, [])


    // const handleClick=(direction)=>{
    //     setIsMoved(true);
    //     console.log(slideNumber);
    //     if (direction === "left" && slideNumber >= -1) {
    //         let distance = Listref.current.getBoundingClientRect().x + 50;
    //       setSlideNumber((slideNumber)=>(slideNumber - 1));
    //       Listref.current.style.transform = `translateX(${230 + distance}px)`;
    //     }
    //     if (direction === "right" && slideNumber < 14) {
    //     let distance = Listref.current.getBoundingClientRect().x - 50;
    //       setSlideNumber((slideNumber)=>(slideNumber + 1));
    //       Listref.current.style.transform = `translateX(${-230 + distance}px)`;
    //     }
    // }
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