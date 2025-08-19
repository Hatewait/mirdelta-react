import React from 'react';
import AboutBrands from '../../components/AboutBrands/AboutBrands';
import Features from '../../components/Features/Features';
import Flagships from '../../components/Flagships/Flagships.tsx';
import MainSlider from '../../components/MainSlider/MainSlider.tsx';

const Home: React.FC = () => {
  return (
    <>
      <MainSlider />
      <AboutBrands />
      <Features />
      <Flagships />
    </>
  );
};

export default Home;
