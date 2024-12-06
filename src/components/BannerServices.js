import React from 'react';
//component
import ServicesCard from './ServicesCard';

const BannerServices = () => {
    const services = [
        {type:2 ,name: 'Relax', img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-1.jpg?alt=media")'}, href: '#'},
        {type:0 ,name: 'Tratamientos Masculinos', img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-2.png?alt=media")'}, href: '#'},
        {type:1 ,name: 'Depilación',img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-3.png?alt=media")'}, href: '#'},
        {type:0 ,name: 'Tratamientos Corporales',img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")'}, href: '#'}
        
    ]


  return (
    <div className='flex flex-col min-w-full my-5 lg:max-w-5xl'>
            <div className='lg:hidden flex flex-row justify-center'>
                <h2 className='banner-services-h2 py-5 text-center text-2xl leading-8 tracking-wider text-typo-color '>Descubrí nuestros servicios</h2>
            </div>
            <div className='hidden lg:flex lg:flex-row lg:justify-start lg:max-w-5xl lg:ml-10 xl:ml-20 2xl:ml-40'>
                <h2 className='banner-services-h2 py-5 leading-8 tracking-wider text-typo-color text-3xl text-left'>Descubrí nuestros servicios</h2>
            </div>
            
        <div className='flex flex-col items-center lg:max-w-5xl lg:flex-row lg:justify-self-center lg:self-center'>
            {
                services.map((services) => (
                    <ServicesCard data = {services} key={services.name}/>
                ))
            }
        </div>
    </div>
  )
}

export default BannerServices