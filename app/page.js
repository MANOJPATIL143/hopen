// pages/index.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
        <SearchBar />
        <main>
          
        </main>
      </div>
    </div>
  );
};

export default Home;
