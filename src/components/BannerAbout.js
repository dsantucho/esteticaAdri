import React from 'react'

const BannerAbout = () => {
  return (
    <div className='flex flex-col items-center my-4'>
        <div className='aboutBox my-4'></div>
        <div className='flex flex-col py-2 w-[340px]'>
            <h2 className='typo-pathway font-normal text-2xl leading-8 tracking-wider text-typo-color'>Sobre Estetica Integral - Adriana Aguilar</h2>
            <p className='text-l font-light leading-9 tracking-wide my-4'>Con más de 10 años de experiencia, ofrecemos tratamientos estéticos de alta calidad y personalizados para hombres y mujeres. Estamos a la vanguardia de las últimas tendencias y técnicas, con capacitación en el extranjero para ofrecer servicios de calidad internacional. Disfruta de una amplia variedad de servicios en nuestro oasis de belleza y bienestar.</p>
        </div>
        <div className='flex w-64 h-12 text-center bg-btn-background justify-around mb-5'>
            <button className='text-xl uppercase text-sc-typo-color'>Sobre Nosotros</button>
        </div>
        <div className='aboutBox my-4'></div>
    </div>
  )
}

export default BannerAbout