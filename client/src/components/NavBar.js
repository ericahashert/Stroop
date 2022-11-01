import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar ( {updateUser} ) {

  const navigate=useNavigate()

  const handleLogOut = () => {
    // DELETE `/logout`
    fetch('/logout',{
      method:'DELETE'
    })
    .then(res => {
      if(res.ok){
        updateUser(false)
        navigate('/')
      }
    })
  }

    return (
      <header>
        <div className="header">
            <nav className="navbar">
            <button onClick={handleLogOut}>Log Out</button>
                <ul className="navbar-container">
                  <Link className="nav-links" to="/substancedata">
                    Substance Data
                  </Link>
                  <Link className="nav-links" to="/eventcalendar">
                    Event Calendar
                  </Link>
                  <Link className="nav-links" to="/blogs">
                    Blogs
                  </Link>
                </ul>
            </nav>
            {/* <span role="img">
                <img className="logo" alt="stroop_logo" src="https://cdn-icons-png.flaticon.com/512/1048/1048329.png"></img>
            </span> */}
            <span>
                <h2 className="title_text">Stroop</h2>
            </span>
            <p>Recovery starts with knowledge</p>
            <ul>
              <li><Link to='/users/new'>Sign Up</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li>Become a Partner!</li>
            </ul>
        </div>
      </header>
    );
  }
  
  export default NavBar;