import React from 'react';
import AboutBrands from '../../components/AboutBrands/AboutBrands';
import Features from '../../components/Features/Features';

const Home: React.FC = () => {
  return (
    <>
      <div className="section-offset">Swiper slider</div>
      <AboutBrands />
      <Features />
    </>
  );
};

export default Home;
