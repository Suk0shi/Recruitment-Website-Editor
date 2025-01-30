import '../styles/Header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo_white from '../assets/logo_white.png'

function Header() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('SavedToken');
    navigate('/Login')
  }

  return (
    <header>
        <div className="left">
          <Link to="/"> 
            <img src={logo_white} alt="Carroline Norris Logo" />
          </Link>
        </div>
        <div className="right">
          {localStorage.getItem('SavedToken') ? 
            <Link to="/SignUp">
                <h2>Create Account</h2>
            </Link> : undefined
          }
          {localStorage.getItem('SavedToken') ? 
            <a href="" onClick={logout}><h2>Logout</h2></a> :
            <Link to="/Login">
                <h2>Login</h2>
            </Link>
          }
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
          {localStorage.getItem('SavedToken') ? 
            <Link to="/CreatePost">
                <h2>Create Post</h2>
            </Link> : undefined
          }
          {localStorage.getItem('SavedToken') ? 
            <Link to="/Unpublished">
                <h2>Unpublished Posts</h2>
            </Link> : undefined
          }
        </div>
        <div className='hamburgerContainer'>
          <label className='hamburgerMenu'>
            <input type="checkbox"/>
          </label>
          <aside className='sidebar'>
            <nav>
              {localStorage.getItem('SavedToken') ? 
                <Link to="/SignUp">
                    <h2>Create Account</h2>
                </Link> : undefined
              }
              {localStorage.getItem('SavedToken') ? 
                <a href="" onClick={logout}><h2>Logout</h2></a> :
                <Link to="/Login">
                    <h2>Login</h2>
                </Link>
              }
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
              {localStorage.getItem('SavedToken') ? 
                <Link to="/CreatePost">
                    <h2>Create Post</h2>
                </Link> : undefined
              }
              {localStorage.getItem('SavedToken') ? 
                <Link to="/Unpublished">
                    <h2>Unpublished Posts</h2>
                </Link> : undefined
              } 
            </nav>
          </aside>
        </div>
      </header>
  )
}

export default Header