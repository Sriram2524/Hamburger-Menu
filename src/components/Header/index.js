// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-con">
    <Link className="linkk" to="/">
      <img
        className="logo-img"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="trigger-button"
          >
            <GiHamburgerMenu />
          </button>
        }
        className="pop"
      >
        {close => (
          <>
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul className="pop-up-con">
              <li className="home-pop-name">
                <Link onClick={() => close()} className="linkk" to="/">
                  Home <AiFillHome />
                </Link>
              </li>
              <li className="home-pop-name">
                <Link onClick={() => close()} to="/about" className="link">
                  About <BsInfoCircleFill />
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
