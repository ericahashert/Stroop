import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignUp () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [country, setCountry] = useState("");
    //should the below be null? since the zipcode is a number, not a string?
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState([])
    const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
        username,
        email,
        password,
        // password_confirmation
        fname,
        lname,
        country,
        code
    }
    setErrors([]);
    // setIsLoading(true);
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((r) => {
    //   setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => navigate(`/users/${user.id}`));
      } else {
        r.json().then((json) => setErrors(Object.entries(json.errors)));
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
                        value={fname}
                        onChange={(e) => setFname(e.target.value)} />
                <label>Last Name</label>
                    <input 
                        type="text" 
                        name="last_name" 
                        id="last_name"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}/>
                <label>Country of Residence</label>
                    <select>
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
                        value={code}
                        onChange={(e) => setCode(e.target.value)}/>
                <button type="submit" value="Submit">Sign Up</button>
            </form>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
    )

}

export default SignUp; 