import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "../style/glogin.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


export default function GLogin() {

    const [cookies, setCookie] = useCookies(["id"]);
    const navigate = useNavigate();


    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id:"474319155200-ijtfjahjjbkthu6928kpsf71ah6sunbu.apps.googleusercontent.com",
            callback: handlecallbackresponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large", text: "signin_with", shape: "pill" }
        );

        google.accounts.id.prompt();
    }, []);

    const handlecallbackresponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        document.getElementById("signInDiv").hidden = true;
        // when your google account details have been gotten the google "sign in" button will be hidden

        const userData = {
            name: userObject.name,
            email: userObject.email,

        };

        try {

            axios.post("https://blogapp2.onrender.com/user/googlelogin", userData)
                .then((response) => {

                    if (response.data.status == "EMAIL") {
                        //email does not exist in the database
                        console.log("email DOES NOT exists");
                        try {

                            axios.post("https://blogapp2.onrender.com/user/googleregister", userData)
                                .then((response) => {

                                    const result = response.data.message._id;
                                    console.log(result);
                                    // console.log(response.data.status);

                                    setCookie('id', result, { path: '/' })
                                    navigate("/")
                                });
                        } catch (err) {
                            console.error()
                        }

                    }
                    else if (response.data.status == "FAILED") {
                        console.log("passwords don't match");
                    } 
                    else {

                        const result = response.data.data[0]._id;
                        console.log(result);
                        setCookie('id', result, { path: '/' })
                        navigate("/")
                    }
                });
        } catch (err) {
            console.error()
        }
    }

    //if we have  no user: sign in button will be visible  
    //if we a user: sign in button will be hidden 
    return (
        <div>
            <div id="signInDiv"></div>
        </div>
    )
}

/* 
https://codesandbox.io/s/compassionate-gauss-pq2wr?file=/src/App.js 
https://ej2.syncfusion.com/react/documentation/rich-text-editor/getting-started/
send to curtis don't forget
*/