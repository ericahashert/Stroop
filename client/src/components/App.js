import React, { useState, useEffect } from 'react';
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import UserPage from './UserPage'
import NavBar from './NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
        })
      }
    })
  },[])

  const updateUser = (user) => setCurrentUser(user)

  return (
    <div className="app">  
      <Router>
      <NavBar updateUser={updateUser}/>
      {!currentUser? <Login error={'please login'} updateUser={updateUser}/> : 
        <Routes>
            <Route exact path="/" element={
                <Home />
            }/>
            <Route path='/users/new' element={
                <SignUp />
            }/>
            <Route path='/login' element={
                <Login updateUser={updateUser}/>
            }/>
            <Route path='/users/:id' element={
              <UserPage />
            }/>
            </Routes>  
            } 
        </Router>
    </div>
)};

export default App;

