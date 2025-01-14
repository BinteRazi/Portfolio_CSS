import React from "react";
import styles from "./contact.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactFormcontainer}>
      <section className={styles.contactFormsection} id="contact">
        <form className={styles.form}>
          <div className={styles.textCenter}>
            <h2 className={styles.contactFormtitle}>Contact Us</h2>
            <p className={styles.contactFormDescription}>
              We did love to hear from you! Fill out the form below to get in touch.
            </p>
          </div>

          <div>
            <label
              htmlFor="name"
              className={`${styles.block} ${styles.textSm} ${styles.fontMedium} ${styles.textGray200} `}
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="enter your name"
              name="name"
              className={styles.contactForminput}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`${styles.block} ${styles.textSm} ${styles.fontMedium} ${styles.textGray200} `}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="enter your email"
              name="email"
              className={styles.contactForminput}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`${styles.block} ${styles.textSm} ${styles.fontMedium} ${styles.textGray200} `}
            >
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="write your message here"
              name="message"
              rows={5}
              className={styles.contactFormtextArea}
            ></textarea>
          </div>

          <button type="submit" className={styles.contactFormbutton}>
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
};

export default ContactForm;
