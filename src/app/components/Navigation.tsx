"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import styles from "../module/Navigation.module.css";

const NavLinks = [
  { name: "Home", Link: "/", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>🏠</span> },
  { name: "About", Link: "/about", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>ℹ️</span> },
  { name: "Projects", Link: "/projects", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>📁</span> },
  { name: "Skills", Link: "/skills", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>💡</span> },
  { name: "Contact", Link: "/contact", icon: (props: React.HTMLAttributes<HTMLSpanElement>) => <span {...props}>📞</span> },
];

const Navigation = () => {
  const path = usePathname();
  const [isRouting, setIsRouting] = useState(false);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <div className={styles.navigationContainer}>
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.Link}
          className={`${styles.navLink} ${path === nav.Link ? styles.active : ""}`}
        >
          <nav.icon className={styles.navIcon} />
          <span className={styles.navText}>{nav.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
