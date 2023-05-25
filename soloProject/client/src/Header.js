import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {UserContext} from './UserContext'
import { Navigate } from "react-router-dom";


export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext)
   // =createContext({})
  //check to if logged in or not
  // we have cookies - check if cookie is valid
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((res) => res.json().then((userInfo) => {
        setUserInfo(userInfo);

      }))
      
  }, []);

  function logout(){
    fetch("http://localhost:4000/logout", {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null);

  }
 
  //userInfo can sometimes be null so the ? catches that
  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        {/*--------------------- Logo ---------------------*/}
        PetPals
        
      </Link>

      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a href="" onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
