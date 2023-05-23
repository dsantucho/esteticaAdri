import React from 'react'

//components
import BannerHeader from '../components/BannerHeader';
import BannerServices from '../components/BannerServices';
import BannerProducts from '../components/BannerProducts';
import BannerTreatments from '../components/BannerTreatments';

const Home = () => {
  return (
    <div className='flex flex-col w-screen bg-background'>
        <BannerHeader/>  
        <BannerServices/>  
        <BannerProducts/>
        <BannerTreatments/>
    </div>
  )
}

export default Home