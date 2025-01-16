import '../styles/Header.css'
import { Link } from 'react-router-dom'
import logo_white from '../assets/logo_white.png'

function Header() {

  return (
    <header>
        <div className="left">
          <Link to="/"> 
            <img src={logo_white} alt="Carroline Norris Logo" />
          </Link>
        </div>
        <div className="right">
          <Link to="/Login">
            <h2>Login</h2>
          </Link>
          <Link to="/About">
            <h2>About Us</h2>
          </Link>
          <Link to="/Services">
            <h2>Our Services</h2>
          </Link>
          <Link to="/Opportunities">
            <h2>Staff Opportunities</h2>
          </Link>
          <Link to="/Contact">
            <h2>Contact</h2>
          </Link>
        </div>
      </header>
  )
}

export default Header