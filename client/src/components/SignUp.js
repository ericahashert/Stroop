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
            <h1>Create an account</h1>
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
                <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                <label>First Name</label>
                    <input 
                        type="text" 
                        name="first_name"
                        id="first_name"
                        value={first_name}
                        onChange={(e) => setFirst_Name(e.target.value)} />
                <label>Last Name</label>
                    <input 
                        type="text" 
                        name="last_name" 
                        id="last_name"
                        value={last_name}
                        onChange={(e) => setLast_Name(e.target.value)}/>
                <label>Country of Residence</label>
                    <select onChange={(e) => setCountry(e.target.value)}>
                        <option value="united states">United States</option>
                        <option value="canada">Canada</option>
                        <option value="italy">Italy</option>
                        <option value="new zealand">New Zealand</option>
                    </select> 
                    <label>Postal Code</label>
                    <input 
                        type="number" 
                        name="postal_code" 
                        id="postal_code"
                        value={zip_code}
                        onChange={(e) => setZip_Code(e.target.value)}/>
                <button type="submit" value="Submit">Sign Up</button>
            </form>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
    )

}

export default SignUp; 