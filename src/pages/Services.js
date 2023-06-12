import React from 'react'

const Services = () => {
  return (
    <div className='flex flex-col'>

      <div className='flex flex-row justify-center'>
        <img className='sm: hidden md:block lg:block p-5  w-11/12 ' src='https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/services%2Fsevice-banner-msn.png?alt=media' alt='banner'/>
        <img className='sm: block md:hidden lg:hidden p-5  w-11/12 mt-4' src='https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/services%2Fbanner-services-msn-mobile.png?alt=media' alt='banner'/>
      </div>
      <div className='flex flex-col bg-sc-background'>
        <div>
          <p>Tratamientos</p>
          <p>Depilacion</p>
          <p>Relajacion</p>
        </div>
      </div>

    </div>
  )
}

export default Services