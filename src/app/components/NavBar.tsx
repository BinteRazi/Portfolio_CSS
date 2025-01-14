"use client";

import { AiOutlineMenu } from "react-icons/ai";
import styles from "../module/NavBar.module.css";

const Socials = [
  { name: "Facebook", src: "/icons/Facebook.png" },
  { name: "Twitter", src: "/icons/Twitter.png" },
  { name: "LinkedIn", src: "/icons/LinkedIn.png" },
];

const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <div className={styles.logoWrapper}>
          <img
            src="/images/logo.png"
            alt="Company logo"
            className={styles.logoImage}
          />
        </div>
        <h1 className={styles.logoText}>N R</h1>
      </div>

      {/* Mobile Menu Icon */}
      <button
        type="button"
        className={styles.menuIcon}
        aria-label="Open navigation menu"
      >
        <AiOutlineMenu size={30} />
      </button>

      {/* Social Icons */}
      <div className={styles.socialIconsContainer}>
        {Socials.map((social) => (
          <img
            key={social.name}
            src={social.src}
            alt={`${social.name} icon`}
            className={styles.socialIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
