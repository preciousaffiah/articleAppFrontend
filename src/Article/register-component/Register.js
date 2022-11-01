import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useCookies } from "react-cookie";
import GLogin from "../login-componenet/GLogin";


export default function Register() {

  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setname] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [emailalreadyexists, setEmailalreadyexists] = useState(false);
  const [cookies, setCookie] = useCookies(["id"]);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password,
    };

    try {

      axios.post("https://blogapp-gdl2.onrender.com/user/register", userData)
        .then((response) => {
          // const result = response.data;
          const result = response.data.message._id;
          console.log(response.data.status);
          if (response.data.status == "EMAIL" ) {
            setEmailalreadyexists(true);
          } 
          else {
            setCookie('id', result, {path: '/'})
            navigate("/")
          }
        });
    } catch (err) {
      console.error()
    }
  };

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);

  };

  return (
    <div className="img js-fullheight bimage">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-md-12">
            <section className="ftco-section">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-4">
                    <div className="login-wrap p-0">
                      <h3 className="mb-4 text-center" >Don't Have an account?</h3>
                      <form action="#" className="signin-form" onSubmit={handleSubmit}>
                        <div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="name" onChange={e => setname(e.target.value)} required="" />
                            {name.length < 1 ? <p className="fcm">name should not be empty</p>
                              :
                              <p></p>}
                          </div>
                          <div className="form-group">
                            <input type="email" className="form-control" placeholder="emailname@email.com" onChange={e => setEmail(e.target.value)} required="" />
                            {email.length < 1 ? <p className="fcm">email should not be empty</p>
                              :
                              <p></p>}
                            {emailalreadyexists ? <p className="fcm">email already exists</p>
                              :
                              <p></p>}
                          </div>
                          <div className="form-group">
                            <input id="password-field" type={passwordShown ? "text" : "password"} className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} required="" />
                            <span toggle="#password-field" onClick={togglePassword} >
                              {!passwordShown ? <i className="fa fa-fw field-icon toggle-password fa-eye"></i> : <i className="fa fa-fw field-icon toggle-password fa-eye-slash"></i>}
                            </span>
                            {password.length < 8 ? <p className="fcm">password should not be less than 8 characters</p>
                              :
                              <p></p>}
                          </div>
                          <div className="form-group">
                            <input id="password-field" type={passwordShown ? "text" : "password"} className="form-control" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} required="" />
                            <span toggle="#password-field" onClick={togglePassword} >
                              {!passwordShown ? <i className="fa fa-fw field-icon toggle-password fa-eye"></i> : <i className="fa fa-fw field-icon toggle-password fa-eye-slash"></i>}
                            </span>
                            {confirmPassword !== password ? <p className="fcm">passwords don't match</p>
                              :
                              <p></p>}
                          </div>
                          <div className="form-group">
                            {name == "" || email == "" || password == "" || confirmPassword !== password || name.length < 1 || email.length < 1 || password.length < 8 ? <div className="col extra3"><p>Don't be scared, when you fill the form correctly your sign up button will show HERE!</p></div>
                              : <a ><button type="submit" className="form-control btn btn-primary submit px-3">Register </button></a>
                            }
                          </div>
                        </div>
                        <center><p>-or-</p></center>
                      </form>
                      <GLogin/>
                      <br/>
                      <p className="ta">Already have an account?</p>
                      <Link to="/login">
                        <div className="social d-flex text-center">
                          <a className="px-2 py-2 mr-md-1 rounded wm"><span className="ion-logo-facebook mr-2"></span> Login</a>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )

}