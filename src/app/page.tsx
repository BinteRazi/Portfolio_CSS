import React from 'react';
import HeroSection from './components/HeroSection';
import Transition from './components/Transition';
import styles from './page.module.css' ;

const Homepage = () => {
  return (
    <main className="homepage">
      <div className="content">
        <HeroSection />
        <Transition />
      </div>
    </main>
  );
};

export default Homepage;
