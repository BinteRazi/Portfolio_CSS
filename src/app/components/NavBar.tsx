"use client";
import Image from "next/image";
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
          <Image
            src="/images/logo.png"
            alt="Company logo"
            width={40}
            height={40} 
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
          <Image
            key={social.name}
            src={social.src}
            alt={`${social.name} icon`}
            width={28}
            height={28}
            className={styles.socialIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
