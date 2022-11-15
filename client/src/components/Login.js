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
            navigate("/")
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
      <div className="columns is-centered is-8 is-variable">
        <div className="column is-5-tablet is-4-desktop">
          <div className="card login_card">
            <div className="card-content"></div>
              <h1 className="title has-text-centered ml-4">Sign in for full access</h1>
              <form onSubmit={handleSubmit} className="ml-4 mr-4">
                <div className="field">
                  <div className="control">
                      <input 
                          type="text" 
                          className="input mt-6"
                          name="email" 
                          id="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                      <input 
                          type="password" 
                          className="input mt-5"
                          name="password" 
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <button className="is-fullwidth is-link button mt-5" type="submit" value="Submit">Log In</button>
              </form>
              <p className="login_text is-size-6 has-text-centered">New to Stroop? <a href="/signup">Sign up</a> for free</p>
              {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
            </div>
          </div>
        </div>
      </div>
      )
  }
  
  export default Login; 