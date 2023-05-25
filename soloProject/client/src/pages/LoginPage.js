import React, { useState, useContext}  from "react";
import { Navigate } from "react-router-dom";
import {UserContext} from '../UserContext'
import ellieProfile from "../images/ellieProfile.jpeg";
import RandomPic from "./RandomPic.js"


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  //creating this for userInfo refresh. grab it from useContext and pass in UserContext
  const {setUserInfo} = useContext(UserContext);


  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      //from the response we parse. in json we can the userInfo from post /login after its password has been verified 
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
        setRedirect(true);
      });
      //direct to home page
    } else {
      alert("wrong username or password");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>

      <form className="login" onSubmit={login} action="">

       <p><strong>Login</strong></p>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Login</button>
        <img className="ellie" src={ellieProfile} alt="" />
      </form>
      <RandomPic />
      <RandomPic />
      <RandomPic />

    </div>
  );
}
