import React, { useState, useEffect } from 'react';
import './header.css';
import NetflixLogo from '../../asset/images/Netflix_2015_logo.svg.webp';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 80) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`header_outer_container ${show ? 'nav__black' : ''}`}>
      <div className='header_container'>
        <div className='header_left'>
          <ul className='header_nav_list'>
            <li className='header_logo_item'>
              <img src={NetflixLogo} alt="Netflix Logo" className="header__logo" />
            </li>
            <li className="nav_link active">Home</li>
            <li className="nav_link">TVShows</li>
            <li className="nav_link">Movies</li>
            <li className="nav_link">Latest</li>
            <li className="nav_link">MyList</li>
            <li className="nav_link hide_on_mobile">Browse by Languages</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            <li className="header_icon"><SearchIcon /></li>
            <li className="header_icon hide_on_small_mobile"><NotificationsNoneIcon /></li>
            <li className="header_icon_profile">
              <AccountBoxIcon />
              <ArrowDropDownIcon className="dropdown_icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
