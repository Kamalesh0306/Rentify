import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userType: '' // Default to 'buyer'
  });

  const { email, password, firstName, lastName, phoneNumber, userType } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/api/v1/signup", {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        userType
      })
      .then(res => {
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/", { state: { id: email } });
        }
      })
      .catch(e => {
        alert("Wrong details");
        console.log(e);
      });

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login">
      <h1>Rentify</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="form">
        <h3>Signup</h3>

        <form action="POST">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChange}
            placeholder="Phone Number"
            required
            pattern="\d{10}"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
            minLength="6"
          />
          <select name="userType" value={userType} onChange={onChange}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <input type="submit" onClick={submit} />
        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to="/">Login Page</Link>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Login;
