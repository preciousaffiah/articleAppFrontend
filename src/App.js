
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./Article/Home";
import ArticlePost from "./Article/ArticlePost";
import Login from "./Article/login-componenet/Login";
import Register from "./Article/register-component/Register";
import PublishArticle from "./Article/PublishArticle";
import GLogin from "./Article/login-componenet/GLogin";
import Home from "./Article/Home";
// import App2 from "./App2";
// import Texteditor from "./Texteditor";


export default function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article-post/:articleid" element={<ArticlePost />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/publish" element={<PublishArticle/>}/>
        <Route path="/glogin" element={<GLogin/>}/>
      </Routes>
    </Router>
  )
}