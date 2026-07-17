import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/banner';
import RowList from '../../Components/Rows/RowList/rowList';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
};

export default Home;
