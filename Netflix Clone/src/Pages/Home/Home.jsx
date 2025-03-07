import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import Row from '../../Components/rows/Row/Row';
import RowList from '../../Components/rows/RowList/RowList';

function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </>
  )
}
export default Home;