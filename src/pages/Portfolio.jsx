import React from 'react'
import PortfolioStyle from "./Pages.module.scss";
import dron from "../img/dron.png"
import forest from "../img/forest.png"

const Portfolio = () => {
  return (
    <div>
      <article className={PortfolioStyle["article"]}>

        <h2 className={PortfolioStyle["title-2"]}>
          My designs
        </h2>

        <section className={PortfolioStyle["article-item"]}>
          <h3 className={PortfolioStyle["title-3"]}>
            Agro Drons
          </h3>

          <div className={PortfolioStyle["article-item-image"]}>
            <img src={dron} alt="Forest Travel" />
          </div>

          <p className={PortfolioStyle["article-item-text"]}>
          Layout of a multi-page website of agro drons.
          </p>

          <a
            href="https://diyoran.github.io/section_2/"
            target='_blank'
            className={PortfolioStyle["article-item-link"]}
          >
            See more
          </a>
        </section>

        <section className={PortfolioStyle["article-item"]}>
          <h3 className={PortfolioStyle["title-3"]}>
            Forest Travel
          </h3>

          <div className={PortfolioStyle["article-item-image"]}>
            <img src={forest} alt="Forest Travel" />
          </div>

          <p className={PortfolioStyle["article-item-text"]}>
          Layout of a multi-page website for travel agency.
          </p>

          <a
            href="https://diyoran.github.io/Forest-Travel/"
            target='_blank'
            className={PortfolioStyle["article-item-link"]}
          >
            See more
          </a>
        </section>

      </article>
    </div>
  )
}

export default Portfolio