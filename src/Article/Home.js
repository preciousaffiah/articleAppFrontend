import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style/home.css";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

export default function Home() {

    const [articles, getArticles] = useState([]);
    const [toparticles, getToparticles] = useState([]);

   useEffect(() => {
    try {

        axios.get("https://blogapp2.onrender.com/user/allArticles/")
          .then((response) => {
            const allArticles = response.data.message;
            getArticles(allArticles);
            // console.log(articles);
            if (articles.category ==="entertainment") {
                console.log(articles,"entertainment");
                // artcles[0] push it inside an array(toparticles)
            } else if (articles.category ==="Politics") {
                console.log(articles,"Politics");
                // artcles[0] push it inside an array(toparticles)
            } else if (articles.category ==="technology") {
                console.log(articles,"technology");
                // artcles[0] push it inside an array(toparticles)
            } else if (articles.category ==="fashion") {
                console.log(articles,"fashion");
                // artcles[0] push it inside an array(toparticles)
            } else if (articles.category ==="religion") {
                console.log(articles,"religion");
                // artcles[0] push it inside an array(toparticles)
            }else if (articles.category ==="other") {
                console.log(articles,"other");
                // artcles[0] push it inside an array(toparticles)
            }
            // when you are done put all of them inside an array and them display that map through that array in the html
            // result: one article from each category
            
          });
      } catch (err) {
        console.error()
      }
      }, []);

    return (
        <div>
            <Navbar />
            <Carousel/>
            <div class="card b0">
                <div class="body bb">
                    <div class="row margin">
                        <div class="col-lg-4 col-md-4">
                            <li class="row clearfix">
                                <div class="icon-box col-md-2 col-2"><img class="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" /></div>
                                <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                    <a href="/article-post">
                                        <p class="m-b-0 mf">Gigi Hadid </p>
                                        <h5 class="mf2"><b>Why are there so many tutorials on how to decouple WordPress?. </b></h5>
                                    </a>
                                    <ul class="list-inline">
                                        <li><a class="fz" href="javascript:void(0);">Mar 09 2018</a></li>
                                    </ul>
                                </div>
                            </li></div> <div class="col-lg-4 col-md-4">
                            <li class="row clearfix">
                                <div class="icon-box col-md-2 col-2"><img class="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" /></div>
                                <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                    <a href="/">
                                        <p class="m-b-0 mf">Gigi Hadid </p>
                                        <h5 class="mf2"><b>Why are there so many tutorials on how to decouple WordPress?. </b></h5>
                                    </a>
                                    <ul class="list-inline">
                                        <li><a class="fz" href="javascript:void(0);">Mar 09 2018</a></li>
                                    </ul>
                                </div>
                            </li></div>
                        <div class="col-lg-4 col-md-4">
                            <li class="row clearfix">
                                <div class="icon-box col-md-2 col-2"><img class="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" /></div>
                                <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                    <a href="/article-post">
                                        <p class="m-b-0 mf">Gigi Hadid </p>
                                        <h5 class="mf2"><b>Why are there so many tutorials on how to decouple WordPress?. </b></h5>
                                    </a>
                                    <ul class="list-inline">
                                        <li><a class="fz" href="javascript:void(0);">Mar 09 2018</a></li>
                                    </ul>
                                </div>
                            </li></div>
                        <div class="col-lg-4 col-md-4">
                            <li class="row clearfix">
                                <div class="icon-box col-md-2 col-2"><img class="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" /></div>
                                <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                    <a href="/article-post">
                                        <p class="m-b-0 mf">Gigi Hadid </p>
                                        <h5 class="mf2"><b>Why are there so many tutorials on how to decouple WordPress?. </b></h5>
                                    </a>
                                    <ul class="list-inline">
                                        <li><a class="fz" href="javascript:void(0);">Mar 09 2018</a></li>
                                    </ul>
                                </div>
                            </li></div> <div class="col-lg-4 col-md-4">
                            <li class="row clearfix">
                                <div class="icon-box col-md-2 col-2"><img class="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" /></div>
                                <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                    <a href="/article-post">
                                        <p class="m-b-0 mf">Gigi Hadid </p>
                                        <h5 class="mf2"><b>Why are there so many tutorials on how to decouple WordPress?. </b></h5>
                                    </a>
                                    <ul class="list-inline">
                                        <li><a class="fz" href="javascript:void(0);">Mar 09 2018</a></li>
                                    </ul>
                                </div>
                            </li></div>
                        <div class="col-lg-4 col-md-4">
                            <li class="row clearfix">
                                <div class="icon-box col-md-2 col-2"><img class="img-fluid img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Awesome Image" /></div>
                                <div class="text-box col-md-10 col-8 p-l-0 p-r0">
                                    <a href="/article-post">
                                        <p class="m-b-0 mf">Gigi Hadid </p>
                                        <h5 class="mf2"><b>Why are there so many tutorials on how to decouple WordPress?. </b></h5>
                                    </a>
                                    <ul class="list-inline">
                                        <li><a class="fz" href="javascript:void(0);">Mar 09 2018</a></li>
                                    </ul>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-content" class="blog-page white">
                <div class="container">
                    <div class="row clearfix">
                        <div class="col-lg-12 col-md-12 left-box mt">
                            <div class="row clearfix">
                                {articles.map((article) =>(
                                    <div class="col-lg-4 col-md-6" key={article._id}>
                                        <div class="card single_post b0">
                                            <div class="body">
                                                <div class="img-post">
                                                    <img class="d-block img-fluid" src="https://via.placeholder.com/800x280/FFB6C1/000000" alt="" />
                                                </div>
                                                <h3><a href={`/article-post/${article._id}`}>{article.topic}</a></h3>
                                                <p class="fz20">{article.text} </p>
                                            </div>
                                            <div class="footer">
                                                <div class="actions">
                                                    <Link to={`/article-post/${article._id}`}  class="grey">
                                                        <a class="btn btn bz" id="continue">Continue Reading</a>
                                                    </Link>
                                                </div>
                                                <ul class="stats">
                                                    <li><i class="fa fa-tags"></i><a>{article.category}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}