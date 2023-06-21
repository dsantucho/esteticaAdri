import React from 'react'

//components
import BannerHeader from '../components/BannerHeader';
import BannerServices from '../components/BannerServices';
import BannerProducts from '../components/BannerProducts';
import BannerTreatments from '../components/BannerTreatments';
import BannerAbout from '../components/BannerAbout';
import BannerContact from '../components/BannerContact';
// import BannerFooter from '../components/BannerFooter';
// import Copyright from '../components/Copyright';

const Home = () => {
  return (
    <div className='flex flex-col w-screen bg-background'>
        <BannerHeader/>  
        <BannerServices/>  
        <BannerProducts/>
        <BannerTreatments/>
        <BannerAbout/>
        <BannerContact/>
        {/* <BannerFooter/>
        <Copyright/> */}
    </div>
  )
}

export default Home