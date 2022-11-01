import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../Article/register-component/style.css";
import { useCookies } from "react-cookie";
import GLogin from "./GLogin";


export default function Login() {

  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [emailstatus, setEmailstatus] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [cookies, setCookie] = useCookies(["id"]);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,

    };

    try {

      axios.post("https://blogapp-gdl2.onrender.com/user/login", userData)
        .then((response) => {

          if (response.data.status == "EMAIL") {
            setEmailstatus(true);
            setInvalidPassword(false);


          } else if (response.data.status == "FAILED") {
            setInvalidPassword(true);
            setEmailstatus(false);
          }
          else {

            setInvalidPassword(false);
            setEmailstatus(false);
            const result = response.data.data[0]._id;
            setCookie('id', result, { path: '/' })
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
    <div>
      <div class="h">
        <div class="img js-fullheight bimage">
          <div class="container">
            <div class="row align-items-center m">
              <div class="col-md-12">
                <section class="ftco-section">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-md-6 col-lg-4">
                        <div class="login-wrap p-0">
                          <h3 class="mb-4 text-center" >Have an account?</h3>
                          <form action="#" class="signin-form" onSubmit={handleSubmit}>
                            <div>
                              <div class="form-group">
                                <input type="email" className="form-control" placeholder="emailname@email.com" onChange={e => setEmail(e.target.value)} required="" />
                                {emailstatus ? <p class="fcm">email does not exist</p>
                                  :
                                  <p></p>}
                              </div>
                              <div class="form-group">
                                <input id="password-field" type={passwordShown ? "text" : "password"} className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} required="" />
                                <span toggle="#password-field" onClick={togglePassword} >
                                  {!passwordShown ? <i class="fa fa-fw field-icon toggle-password fa-eye"></i> : <i className="fa fa-fw field-icon toggle-password fa-eye-slash"></i>}
                                </span>
                              </div>
                              {invalidPassword ? <p className="fcm">invalid email or password</p>
                                :
                                <p></p>}
                              <div class="form-group">
                              </div>
                              <a ><button type="submit" className="form-control btn btn-primary submit px-3" >Login </button></a>
                            </div>
                            <br/>
                            <center><p>-or-</p></center>
                          </form>
                          <GLogin/>
                          <br/>
                          <p className="ta">Don't have an account?</p>
                          <Link to="/register">
                            <div class="social d-flex text-center">
                              <a class="px-2 py-2 mr-md-1 rounded wm"><span class="ion-logo-facebook mr-2"></span>Register</a>
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
      </div>
    </div>
  )
}
