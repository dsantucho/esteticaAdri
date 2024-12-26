import React from 'react';

const BannerAbout = () => {
  const styleImgAbout1 = {
    backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/about%2Fphoto-about.jpg?alt=media")'
};
  return (
    <div className='flex flex-col items-center my-4 lg:flex-row lg:justify-center lg:px-32 lg:py-2'>
        <div className='aboutBox my-4 lg:hidden'></div>
        <div className='sm:hidden md: hidden lg:block lg:pr-10'>
          <div className='w-[440px] h-[550px] overflow-hidden flex items-center bg-cover bg-center my-6'
                  style={styleImgAbout1}></div>
        </div>
        <div className=' lg:border-l-4 lg:border-sc-background '>
          <div className='flex flex-col py-2 w-[340px] '>
              <h2 className='typo-pathway font-normal text-3xl leading-8 tracking-wider text-typo-color lg:pl-5 lg:text-3xl'>Sobre Estetica Integral - Adriana Aguilar</h2>
              <p className='text-l font-light leading-9 tracking-wide my-4 lg:pl-5'>Con más de 10 años de experiencia, ofrecemos tratamientos estéticos de alta calidad y personalizados para hombres y mujeres. Estamos a la vanguardia de las últimas tendencias y técnicas, con capacitación en el extranjero para ofrecer servicios de calidad internacional. Disfruta de una amplia variedad de servicios en nuestro oasis de belleza y bienestar.</p>
          </div>
          <div className='flex w-64 h-12 text-center bg-btn-background justify-around mb-5 lg:ml-5'>
              <button className='text-xl uppercase text-sc-typo-color'>Sobre Nosotros</button>
          </div>
        </div>

        <div className='aboutBox my-4 lg:hidden'></div>
    </div>
  )
}

export default BannerAbout