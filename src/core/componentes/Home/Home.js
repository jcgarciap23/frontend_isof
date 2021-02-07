import React from 'react';
import Hero from './Hero/index';
import Feature from './Feature/index';
import Footer from './Footer/index';
import Products from './Products/index'

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Feature />
      <Products />
      <Footer />
    </>
  );
}

export default Home;