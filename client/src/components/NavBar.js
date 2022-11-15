import React from "react";
import { useNavigate } from "react-router-dom";
import stroopLogo from '../assets/stroopLogo.png'

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
        updateUser({})
        navigate('/')
      } else {
        // const json = res.json();
        // return Promise.reject(json);
      }
    })
  }

  console.log(localStorage.getItem('token'))

    return (
        <nav className="navbar is-white">
          <div className="navbar-brand">
            <a className="navbar-item" id="logo_and_motto" href="/">
              <img src={stroopLogo} width="112" height="28" />
              <p className="is-size-7"> Recovery starts with knowledge</p>
            </a>
          </div>

          <div id="navbarLinks" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/substances">
                Drug Data
              </a>

              <a className="navbar-item" href="/events">
                Event Calendar              
              </a>

              <a className="navbar-item" href="/community">
                Community              
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-link" href="/signup">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light" href="/login">
                    Log in
                  </a>
                  <a className="button is-link" href="/signup">
                    <strong>Become a Partner</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>


                // {<li><a href="/users/new">Sign Up</a></li> */}
                // <button onClick={handleLogOut}>Log Out</button>
)}
  
  export default NavBar;