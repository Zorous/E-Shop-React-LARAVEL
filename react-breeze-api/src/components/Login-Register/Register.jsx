import React, { useState } from "react";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/register", {
        name,
        email,
        password,
        password_confirmation,
      });
      setName("");
      setEmail("");
      setPassword("");
      setPassword_confirmation("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container p-5">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group pr-5">
          <label htmlFor="nom">Nom et Prenom</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom complet"
          />
        </div>
        <div className="form-group pr-5">
          <label htmlFor="mail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="mail"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group pr-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="form-group pr-5">
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            type="password"
            className="form-control"
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
            id="password_confirmation"
            placeholder="Password Confirmation"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
