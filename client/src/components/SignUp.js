import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import beach from '../assets/beach.jpg'

function SignUp () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [country, setCountry] = useState("");
    //should the below be null? since the zipcode is a number, not a string?
  const [zip_code, setZip_Code] = useState("");
  const [errors, setErrors] = useState([])
    const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    // setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: 
          {
            "username": username,
            "email": email,
            "password": password,
            "first_name": first_name,
            "last_name": last_name,
            "country": country,
            "zip_code": zip_code
          }
      })
    }).then((r) => {
    //   setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => navigate(`/`));
      // } else {
        // r.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

    return (
      <div className="signup">
        <div className="columns is-centered is-8 is-variable">
          <div className="column is-5-tablet is-4-desktop">
            <div className="card signup_card">
              <div className="card-content"></div>
                <h1 className="title has-text-centered ml-4">Create an account</h1>
            <form onSubmit={handleSubmit} className="ml-4 mr-4">
              <div className="field">
                  <div className="control">
                    <input 
                        type="text" 
                        className="input mt-4"
                        placeholder="Username"
                        name="username" 
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                  </div>
              </div>
              <div className="field">
                  <div className="control">
                    <input 
                        type="password" 
                        className="input mt-2"
                        placeholder="Password"
                        name="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                  </div>
              </div>
              <div className="field"> 
                  <div className="control">
                    <input 
                        type="email" 
                        className="input mt-2"
                        placeholder="Email"
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                  </div>
              </div>
              <div className="field is-grouped">
                  <div className="control">
                    <input 
                        type="text" 
                        className="input mt-2"
                        placeholder="First Name"
                        name="first_name"
                        id="first_name"
                        value={first_name}
                        onChange={(e) => setFirst_Name(e.target.value)} />
                    </div>
                  <div className="control">
                    <input 
                        type="text" 
                        className="input mt-2"
                        placeholder="Last Name"
                        name="last_name" 
                        id="last_name"
                        value={last_name}
                        onChange={(e) => setLast_Name(e.target.value)}/>
                  </div>
              </div>
              <div className="field is-grouped">
                  <div className="control">
                    <div className="select is-dark">
                      <select className="mt-2" onChange={(e) => setCountry(e.target.value)}>
                        <option value="united states">United States</option>
                        <option value="canada">Canada</option>
                        <option value="italy">Italy</option>
                        <option value="new zealand">New Zealand</option>
                      </select> 
                    </div>
                  </div>
                  <div className="control is-expanded">
                    <input 
                        type="number" 
                        className="input mt-2"
                        placeholder="Zip/postal Code"
                        name="postal_code" 
                        id="postal_code"
                        value={zip_code}
                        onChange={(e) => setZip_Code(e.target.value)}/>
                    </div>
                  </div>
                <button className="is-fullwidth is-link button mt-5" type="submit" value="Submit">Sign Up</button>
            </form>
            <p className="login_text is-size-6 has-text-centered">Already have an account? <a href="/login">Sign in</a></p>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUp; 