import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Article/style/articlePost.css"
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ArticlePost() {
  
    const [article, getArticle] = useState([]);
    const [author, getAuthor] = useState([]);


    useEffect(() => {
  
            try {
 
                 const articleid = window.location.pathname.split('/').pop();
                
                 axios.get(`https://blogapp-gdl2.onrender.com/user/uniquearticle/${articleid}`)
                   .then((response) => {
                     const status = response.data.status;
                    if (status == "FAILED") {
                        console.log("404 component or page/article does not exist or your link might be broken");
                    } else {
                        const oneArticle = response.data.message;
                        getArticle(oneArticle);
                        // console.log(article);

                        const userId = {
                            id: oneArticle.user_id,
                        };
                    
                        try {
    
                            axios.post("https://blogapp-gdl2.onrender.com/user/getuser/", userId)
                            .then((response) => {
                
                                const authorDetails = response.data.message[0];
                                getAuthor(authorDetails);
                            
                            });
                        } catch (err) {
                            console.error()
                        }
                    }
                   });
               } catch (err) {
                 console.error()
               }

           }, []);
 
    return (
        <div class="bg">
        <Navbar/>
            <div class="container pb50 pt">
                <div class="row">
                    <div class="col-md-9 mb40">
                        <article>
                            <img src="https://bootdey.com/img/Content/bg1.jpg" alt="" class="img-fluid mb30" />
                            <div class="post-content">
                                <h3>{article.topic}</h3>
                                <ul class="post-meta list-inline">
                                    <li class="list-inline-item">
                                        <i class="fa fa-user-circle-o"></i> {author.name}
                                    </li>
                                    <li class="list-inline-item">
                                        <i class="fa fa-calendar-o"></i> {article.created}
                                    </li>
                                    <li class="list-inline-item">
                                        <i class="fa fa-tags"></i> {article.category}
                                    </li>
                                </ul>
                                <p>{article.text}</p>
                                
                                <hr class="mb40" />
                                <h4 class="mb40 text-uppercase font500">About Author</h4>
                                <div class="media mb40">
                                    <i class="d-flex mr-3 fa fa-user-circle fa-5x text-primary"></i>
                                    <div class="media-body">
                                        <h5 class="mt-0 font700">{author.name}</h5> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                    </div>
                                </div>


                            </div>
                        </article>
                        {/* <!-- post article--> */}

                    </div>
                    <div class="col-md-3 mb40">


                        <div>
                            <h4 class="navbar-brand ln">Latest News</h4>
                            <ul class="list-unstyled">
                                <li class="media">
                                    <img class="d-flex mr-3 img-fluid" width="64" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Generic placeholder image" />
                                    <div class="media-body">
                                        <h5 class="mt-0 mb-1"><Link to="/article-post">Lorem ipsum dolor sit amet</Link></h5> April 05, 2017
                                    </div>
                                </li>
                                <li class="media my-4">
                                    <img class="d-flex mr-3 img-fluid" width="64" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Generic placeholder image" />
                                    <div class="media-body">
                                        <h5 class="mt-0 mb-1"><Link to="/article-post">Lorem ipsum dolor sit amet</Link></h5> April 05, 2017
                                    </div>
                                </li>
                                <li class="media">
                                    <img class="d-flex mr-3 img-fluid" width="64" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Generic placeholder image" />
                                    <div class="media-body">
                                        <h5 class="mt-0 mb-1"><Link to="/article-post">Lorem ipsum dolor sit amet</Link></h5> April 05, 2017
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      <Footer />

        </div>
    )
}