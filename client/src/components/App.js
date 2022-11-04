import React, { useState, useEffect } from 'react';
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import UserPage from './UserPage'
import NavBar from './NavBar'
import DrugData from './DrugData'
import Community from './Community'
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(false)

  const updateUser = (user) => setCurrentUser(user)

  useEffect(()=> {
    fetch("/current_user", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then(r => {
      if (r.ok){
        console.log(r)
        return r.json()
      } else {
        console.log(r)
      }
    })
    .then(console.log)
  }, [])

  return (
    <div className="app">  
      <Router>
      <NavBar updateUser={updateUser}/>
      {/* {!currentUser? <Login error={'please login'} updateUser={updateUser}/> :  */}
        <Routes>
            <Route exact path="/" element={
                <Home />
            }/>
            <Route path='/signup' element={
                <SignUp />
            }/>
            <Route path='/login' element={
                <Login updateUser={updateUser}/>
            }/>
            <Route path='/users/:id' element={
              <UserPage />
            }/>
            <Route path='/drugdata' element={
              <DrugData />
            }/>
            <Route path='/community' element={
              <Community />
            }/> */
            </Routes>  
        </Router>
    </div>
)};

export default App;

