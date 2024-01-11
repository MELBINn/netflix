import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

function NavBar() {
  return (
    <div className='home-navbar'>
        <div className='left'>
            <img className='home-logo' src="/image/netflix.png" alt="" />
            <h6>Home</h6>
            <h6>Tv Shows</h6>
            <h6>Movies</h6>
            <h6>New & Popular</h6>
            <h6>My List</h6>
            <h6>Browse By Languages</h6>
        </div>
        <div className='right'>
            <SearchIcon/>
            <NotificationsIcon />
            <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" className='netflix-profile' alt="" />

        </div>
    </div>
  )
}

export default NavBar