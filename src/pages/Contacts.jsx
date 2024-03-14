import React from 'react'
import ContactStyle from "./Pages.module.scss";

const Contacts = () => {
  return (
    <div>
      <section className={ContactStyle["contact"]}>
        <h2 className={ContactStyle["title-2"]}>
          Contacts
        </h2>

        <p className={ContactStyle["contact-text"]}>
        Write me! <a href="mailto:yukine3012@gmail.com">yukine3012@gmail.com</a>
        </p>

        <h3 className={ContactStyle["title-3"]}>
          My social media
        </h3>

        <ul className={ContactStyle["contact-list"]}>
          <li>
            <a href="tel:998909070821" target='_blank'>Tel</a>
          </li>
          <li>
            <a href="https://t.me/nemo_3012" target='_blank'>Telegram</a>
          </li>

          <li>
            <a href="#" target='_blank'>Instagram</a>
          </li>

          <li>
            <a href="#" target='_blank'>Facebook</a>
          </li>

        </ul>
      </section>
    </div>
  )
}

export default Contacts