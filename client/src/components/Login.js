import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login ( {updateUser} ) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    function handleSubmit(e) {
      e.preventDefault();
            // setErrors([]);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: 
            {
              "email": email,
              "password": password
            }
        }),
      }).then((res) => {
        //  setIsLoading(false);
        if (res.ok) {
          console.log(res)
            localStorage.setItem("token", res.headers.get("Authorization"))
            updateUser(res)
            return res.json();
          } else {
            throw new Error(res)
          }
            // navigate('/')});
            // navigate(`/users/${user.id}`)});
        // } else {
        //   r.json().then((json) => setErrors(Object.entries(json.errors)));
        })}
  
      return (
          <div className="login">
              <h1>Sign in for full access</h1>
              <form onSubmit={handleSubmit}>
                  <label>Email</label>
                      <input 
                          type="text" 
                          name="email" 
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
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
  }
  
  export default Login; 