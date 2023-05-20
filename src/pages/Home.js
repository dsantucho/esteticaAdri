import React from 'react'

//components
import BannerHeader from '../components/BannerHeader';
import BannerServices from '../components/BannerServices';

const Home = () => {
  return (
    <div className='flex flex-col w-screen bg-background'>
        <BannerHeader/>  
        <BannerServices/>  
    </div>
  )
}

export default Home