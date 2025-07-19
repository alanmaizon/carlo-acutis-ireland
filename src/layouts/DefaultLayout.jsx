import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
      <Contact />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
