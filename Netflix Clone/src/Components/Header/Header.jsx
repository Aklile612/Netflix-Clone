import { useEffect, useState } from 'react'
import NetflixLogo from "../../assets/images/netflix_PNG11.png"

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./header.css"
function Header() {
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>setScrolled(window.scrollY>50);
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <div className={`header_outer_container ${scrolled?"nav_black":""}`}> 
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li> <img src={NetflixLogo} alt="Netflix-logo" width="100" /></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>

        </div>

      </div>
      <div className='header-right'>
        <ul>
          <li><SearchIcon/></li>
          <li><NotificationsIcon/></li>
          <li><AccountBoxIcon/></li>
          <li><ArrowDropDownIcon/></li>
        </ul>

      </div>
    </div>
  )
}

export default Header
