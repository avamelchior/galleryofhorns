import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import data from './beasts.json';

const App = () => {
  return (
    <>
      <Header />
      <Gallery data={data}/>
      <Footer />
    </>
  );
};

export default App
