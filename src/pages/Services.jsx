import React from 'react'
import ServiceStyle from "./Pages.module.scss";

const Services = () => {
  return (
    <div>
      <section className={ServiceStyle["services"]}>
        <h2 className={ServiceStyle["title-2"]}>
        My website design services
        </h2>

        <ul className={ServiceStyle["services-list"]}>
          <li>
          Layout based on layouts from Photoshop or Figma
          </li>

          <li>
          Mobile, adaptive layout for smartphones and tablets
          </li>

          <li>
          SEO optimized layout for promotion in search engines
          </li>

          <li>
          Various JavaScript and jQuery scripts for interactivity on the site.
          </li>

          <li>
          Retina optimized layout, so your site will not be embarrassed to open on Apple technology or a 4K display.
          </li>
        </ul>

        <p className={ServiceStyle["services-text"]}>
        I create websites by translating layouts from Figma or Photoshop into clean, valid and semantic HTML code. This means that it will work without errors, is well indexed by search robots and will help your site take good positions in searches.
        </p>

        <h3 className={ServiceStyle["title-3"]}>
        My skills in website design:
        </h3>

        <ul className={ServiceStyle["services-list"]}>
          <li>
            HTML5, CSS3, Flexbox, SCSS, JS, jQuery, Gulp
          </li>

          <li>
          Neat, logical, thoughtful code
          </li>

          <li>
          Compliance with W3C standards and BEM naming rules
          </li>
          
          <li>
          Adaptation/implementation of plugins.
          </li>

          <li>
          Using sprites - allows you to speed up page loading

          </li>

          <li>
          Pixel perfect - perfect match with the design layout

          </li>

          <li>
          Retina Ready - graphics will look clear on retina and 4K screens
          </li>
        </ul>

        <p className={ServiceStyle["services-text"]}>
        Optimizing page loading speed - thanks to graphics processing. The site will load quickly - this will delight your users and help you get a higher position in searches.
        </p>

        <p className={ServiceStyle["services-text"]}>
        The layout is easily integrated into any content management system: WordPress, Bitrix, ModX, Joomla, OpenCart, ShopScript and others.
        </p>
      </section>
    </div>
  )
}

export default Services