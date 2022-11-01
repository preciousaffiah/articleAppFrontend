import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/navbar.css";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Navbar() {

  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  const [username, setUsername] = useState(false);

  const handleLogout = () => {
    removeCookie('id', { path: '/' })


  }

  useEffect(() => {
    try {
      const userId = {
        id: cookies.id,

      };

      axios.post("https://blogapp2.onrender.com/user/getuser", userId)
        .then((response) => {

          const username = response.data.message[0].name;
          setUsername(username)

        });
    } catch (err) {
      console.error()
    }
  }, [])

  return (
    <div>
      <nav class="navbar">
        <div class="container" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="navbar-brand whitey" href="#">My Blog!!</a>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="navbar-brand cf welcome" href="#">{cookies.id ? <>Welcome {username}!!</> : <></>}</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 hi">
            <div class="navbar-nav ml-auto">
              <Link to={cookies.id ? "/publish" : "/login"}> <button class="navbar-brand extra" id="publish" >Publish Article</button></Link>
              {cookies.id ? <button class="navbar-brand extra" id="publish" onClick={handleLogout}>Logout</button> : <></>}
            </div>
          </form>
        </div>
      </nav>
    </div>
  )

}