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
    <div className='flex-auto min-w-full my-5'>
        <h2 className='banner-services-h2 p-5 text-center text-3xl leading-8 tracking-wider text-typo-color lg:text-5xl lg:text-left'>Descubrí nuestros servicios</h2>
        <div className='flex flex-col items-center lg:flex-row lg:justify-center'>
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