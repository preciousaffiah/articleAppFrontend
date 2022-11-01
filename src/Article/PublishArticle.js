import React, { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import "../Article/register-component/style.css";
import "./style/publish-article.css";
import { Navigate, useNavigate } from "react-router-dom";
import moment from "moment";

export default function PublishArticle() {
  const [topic, setTopic] = useState(false);
  const [category, setCategory] = useState(false);
  const [text, setText] = useState(false);
  const [cookies] = useCookies(["id"]);
  const navigate = useNavigate();
  var date = moment();
  var currentDate = date.format('MMMM Do YYYY');

  if (!cookies.id) {
    return <Navigate to="/login" replace />
  }
  else {

    const postt = async (e) => {
      e.preventDefault();
      const articleData = {
        created: currentDate,
        topic: topic,
        category: category,
        text: text,
        user_id: cookies.id
      };

      try {

        axios.post("https://blogapp2.onrender.com/user/publisharticle/", articleData)
          .then((response) => {

            navigate("/")

          });
      } catch (err) {
        console.error()
      }
    };

    return (
      <div>
        <div className="img js-fullheight back">
          <div class="container">
            <div class="row align-items-center"
              style={{ minHeight: '100vh' }}>
              <div class="col-md-12" >
                <section className="ftco-section" >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-md-6 col-lg-8">
                        <div className="login-wrap p-0">
                          <h3 className="mb-4 text-center bold">Publish an article</h3>
                          <form action="#" className="signin-form" onSubmit={postt}>
                            <div>
                              <div className="form-group" >
                                <input type="text" className="form-control br" placeholder="Topic" onChange={e => setTopic(e.target.value)} required="" />
                                {topic.length < 1 ? <p className="fcm">topic should not be empty</p>
                                  :
                                  <p></p>}
                              </div>
                              <div className="form-group" >
                                <div class="input-group mb-3">
                                  <select class="form-select" onChange={e => setCategory(e.target.value)} required="" id="inputGroupSelect03" aria-label="Example select with button addon">
                                    <option selected>Category</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Politics">Politics</option>
                                    <option value="Technology">Technology</option>
                                    <option value="fashion">fashion</option>
                                    <option value="religion">religion</option>
                                    <option value="other">other</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group" >
                                <div class="mb-3 height">
                                  <textarea class="form-control br" id="exampleFormControlTextarea1" onChange={e => setText(e.target.value)} required="" placeholder="write some text here..." rows="3"></textarea>
                                </div>
                              </div>
                              <div className="form-group extra2">
                                {topic == "" || category == "" || text == "" || category === "Category" || topic.length < 1 || category.length < 1 || text.length < 1 ? <div className="col"><p>Don't be scared, when you fill the form correctly your "Publish" button will show HERE!</p></div>
                                  : <a ><button type="submit" className="form-control btn btn-primary submit px-3 br">Publish </button></a>
                                }
                              </div>
                            </div>
                          </form>
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
    )
  }
}