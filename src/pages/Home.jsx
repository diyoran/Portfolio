import React from 'react'
import HomeStyle from "./Pages.module.scss";
import { Link } from "react-router-dom"
import ava from "../img/avatar.jpg"



const Home = () => {
  return (
    <div>
      <section className={HomeStyle["about"]}>
        <h2 className={HomeStyle["title-2"]}>
          About me
        </h2>

        <div className={HomeStyle["about-desc"]}>
          <p>
            I like to design websites and make them look beautiful, neat and user-friendly. Also I consider all feedbacks and discuss with clients.
          </p>

          <p>
            I studied front-end at the IT academy, also on my own by taking video courses and studying necessary materials. You can take a look at my works  <Link
              to={"/Portfolio/Portfolio"}
              className={HomeStyle["about-link"]}
            >
              here.
            </Link>
          </p>
        </div>

        <div className={HomeStyle["about-image"]}>
          <img src={ava} alt="Portfolio Image" />
        </div>

        <div className={HomeStyle["about-desc"]}>
          <p>
            <b>Guarantees</b> Completing work before deadline and making corrections if necessary.
          </p>

          <p>
            My client's comments:
          </p>

          <blockquote className={HomeStyle["blockqoute"]}>
            <i>
             Always in touch and listens carefully to the job offers. High-quality feedback and unique suggestions for future improvement. 
            </i>
          </blockquote>

          <p>
            It's important to me that the client is satisfied ^^
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home