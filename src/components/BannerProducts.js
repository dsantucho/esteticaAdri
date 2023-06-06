import React from 'react';
//img


const BannerProducts = () => {
    const styleImgProduct1 = {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/products%2Fproduct-1.png?alt=media")'
    };
    const styleImgProduct2 = {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/products%2Fproduct-4.png?alt=media")'
    };
    const styleImgProduct3 = {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/products%2Fproduct-3.png?alt=media")'
    };
  return (
    <div className='flex-auto min-w-full my-5 bg-sc-background'>
        <div>
            <h2 className=' banner-services-h2 p-6 text-center text-3xl leading-8 tracking-wider text-typo-color lg:hidden'>
            Nuestros productos <br /> &amp; <br /> Tecnologías</h2>
            <h2 className='banner-services-h2 p-6 text-center text-5xl leading-8 tracking-wider text-typo-color hidden lg:block lg:text-left'>
          Nuestros productos &amp; Tecnologías
        </h2>
        </div>
        <div className='lg:flex lg:justify-around'>
            <div className='flex flex-col items-center md:px-16 lg:px-2 lg:w-[400px] lg:m-2'>
                <div className='h-[140px] w-[140px] overflow-hidden flex flex-col items-center bg-cover bg-center my-6'
                style={styleImgProduct1}></div>
                <span className='text-xl font-extralight tracking-wider leading-6 text-black text-center my-2 px-3'>Productos de alta calidad aprobados por expertos en el cuidado de la piel</span>
            </div>
            <div className='flex flex-col items-center md:px-16 lg:px-2 lg:w-[400px] lg:m-2'>
                <div className='h-[140px] w-[140px]  flex flex-col items-center bg-contain bg-no-repeat bg-center my-6'
                style={styleImgProduct2}></div>
                <span className='text-xl font-extralight tracking-wider leading-6 text-black text-center my-2 px-3'>Técnicas avanzadas en tecnología de belleza.</span>
            </div>
            <div className='flex flex-col items-center md:px-16 lg:px-2 lg:w-[400px] lg:m-2'>
                <div className='h-[140px] w-[140px] overflow-hidden flex flex-col items-center bg-cover bg-center my-6'
                style={styleImgProduct3}></div>
                <span className='text-xl font-extralight tracking-wider leading-6 text-black text-center mt-2 mb-6 px-3'>Productos exclusivos y seleccionados a nivel internacional para brindar los mejores resultados</span>
            </div>
        </div>
    </div>
  )
}

export default BannerProducts