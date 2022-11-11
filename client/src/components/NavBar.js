import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar ( {updateUser} ) {

  const navigate=useNavigate()

  const handleLogOut = () => {
    // DELETE `/logout`
    let token = localStorage.getItem('token')
    fetch('/logout',{
      method:'DELETE',
      headers: {
        Authorization: token
      },
    })
    .then((res) => {
      if(res.ok){
        localStorage.removeItem('token');
        updateUser(false)
        navigate('/login')
        // navigate('/')
      } else {
        // const json = res.json();
        // return Promise.reject(json);
      }
    })
  }

  console.log(localStorage.getItem('token'))

    return (
      <header>
        <div className="header">
            <nav className="navbar">
            <button onClick={handleLogOut}>Log Out</button>
                <ul className="navbar-container">
                  <Link className="nav-links" to="/substances">
                    Drug Data
                  </Link>
                  <Link className="nav-links" to="/events">
                    Event Calendar
                  </Link>
                  <Link className="nav-links" to="/community">
                    Community
                  </Link>
                </ul>
            </nav>
            {/* <span role="img">
                <img className="logo" alt="stroop_logo" src="https://cdn-icons-png.flaticon.com/512/1048/1048329.png"></img>
            </span> */}
            <div className="navbar_text">
            <span>
              <a href="/">            
                <h2 className="title_text">Stroop</h2>
              </a>
              </span>
            <p>Recovery starts with knowledge</p>
            </div>
            <nav>
              <ul>
                {/* <li><a href="/users/new">Sign Up</a></li> */}
                <Link to='/signup'> Sign Up</Link>
                <Link to='/login'> Login</Link>
              </ul>
            </nav>
        </div>
      </header>
    );
  }
  
  export default NavBar;