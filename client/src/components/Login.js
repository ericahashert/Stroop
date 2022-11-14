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
              <h1 className="title ml-4">Sign in for full access</h1>
              <form onSubmit={handleSubmit} className="ml-4 mr-4">
                <div className="field">
                  <label className="label">Email</label>
                    <div className="control">
                      <input 
                          type="text" 
                          className="input"
                          name="email" 
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                    <div className="control">
                      <input 
                          type="password" 
                          className="input"
                          name="password" 
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <button className="button" type="submit" value="Submit">Log In</button>
              </form>
              {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
          </div>
      )
  }
  
  export default Login; 