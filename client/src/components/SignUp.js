import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
        r.json().then((user) => navigate(`/users/${user.id}`));
      // } else {
        // r.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }

    return (
        <div className="signup">
            <h1 className="title ml-4">Create an account</h1>
            <form onSubmit={handleSubmit} className="ml-4 mr-4">
              <div className="field">
                <label className="label">Username</label>
                  <div className="control">
                    <input 
                        type="text" 
                        className="input"
                        name="username" 
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
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
              <div className="field"> 
                <label className="label">Email</label>
                  <div className="control">
                    <input 
                        type="email" 
                        className="input"
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                  </div>
              </div>
              <div className="field">
                <label className="label">First Name</label>
                  <div className="control">
                    <input 
                        type="text" 
                        className="input"
                        name="first_name"
                        id="first_name"
                        value={first_name}
                        onChange={(e) => setFirst_Name(e.target.value)} />
                  </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                  <div className="control">
                    <input 
                        type="text" 
                        className="input"
                        name="last_name" 
                        id="last_name"
                        value={last_name}
                        onChange={(e) => setLast_Name(e.target.value)}/>
                  </div>
              </div>
              <div className="field">
                <label className="label">Country of Residence</label>
                  <div className="control">
                    <div className="select is-dark">
                      <select onChange={(e) => setCountry(e.target.value)}>
                        <option value="united states">United States</option>
                        <option value="canada">Canada</option>
                        <option value="italy">Italy</option>
                        <option value="new zealand">New Zealand</option>
                      </select> 
                    </div>
                  </div>
              </div>
              <div className="field">
                <label className="label">Postal Code</label>
                  <div className="control">
                    <input 
                        type="number" 
                        className="input"
                        name="postal_code" 
                        id="postal_code"
                        value={zip_code}
                        onChange={(e) => setZip_Code(e.target.value)}/>
                  </div>
              </div>
                <button className="button" type="submit" value="Submit">Sign Up</button>
            </form>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
    )

}

export default SignUp; 