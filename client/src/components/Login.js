import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login ( {updateUser} ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

      const navigate = useNavigate()
  
    function handleSubmit(e) {
      e.preventDefault();
      const user = {
          username,
          password,
      }
      setErrors([]);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user
          
          
      ),
      }).then((r) => {
      //   setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => {
            updateUser(user)
            navigate(`/users/${user.id}`)});
        } else {
        //   r.json().then((json) => setErrors(Object.entries(json.errors)));
        }})
  
      return (
          <div className="login">
              <h1>Sign in for full access</h1>
              <form onSubmit={handleSubmit}>
                  <label>Username</label>
                      <input 
                          type="text" 
                          name="username" 
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}/>
                  <label>Password</label>
                      <input 
                          type="password" 
                          name="password" 
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                  <button type="submit" value="Submit">Log In</button>
              </form>
              {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
          </div>
      )
  }}
  
  export default Login; 