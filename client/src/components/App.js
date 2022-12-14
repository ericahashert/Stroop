import React, { useState, useEffect } from 'react';
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import NavBar from './NavBar'
import DrugData from './DrugData'
import Community from './Community'
import EventCalendar from './EventCalendar';
// import Footer from './Footer'
import '../App.css';
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    fetch("/current_user", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then(r => {
      if (r.ok){
        console.log(r)
        setUser(r)
        return r.json()
      } else {
        console.log("Not signed in")
      }
    })
    .then(console.log)
  }, [])

  useEffect(() => {
    fetch("/posts").then((response) => {
      if (response.ok) {
        response.json().then((posts) => setPosts(posts));
      }
    });
  }, []);


  // const deleteAccount = (id) => setAccounts(current => current.filter(p => p.id !== id)) 
  function updateUser() {
    setUser({
      ...user,
          username: user.username,
          email: user.email,
          password: user.password,
          first_name: user.first_name,
          last_name: user.last_name,
          country: user.country,
          zip_code: user.zip_code
    })
  }

  return (
    <div className="app">  
      <Router>
      <NavBar updateUser={updateUser} user={user}/>
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
            <Route path='/substances' element={
              <DrugData />
            }/>
            <Route path='/community' element={
              <Community posts={posts} setPosts={setPosts}/>
            }/> 
             <Route path='/events' element={
              <EventCalendar />
            }/> 
            </Routes>  
        </Router>
    </div>
)};

export default App;

