import React from 'react'
import NetfixLogo from "../../assets/images/netflix_PNG11.png"

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./header.css"
function Header() {
  return (
    <div className='header_outer_container'> 
      <div className='header_container'>
        <div className='header_left'>
          <ul>
            <li> <img src={NetfixLogo} alt="Netfix-logo" width="100" /></li>
            <li>Netfix</li>
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
