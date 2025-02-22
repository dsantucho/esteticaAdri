import React from 'react';
//component
import ServicesCard from './ServicesCard';

const BannerServices = () => {
    const services = [
        {type: 0, name: 'Tratamientos Corporales', img: {backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")'}, href: '#'},
        {type: 0, name: 'Tratamientos Masculinos', img: {backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-2.png?alt=media")'}, href: '#'},
        {type: 2, name: 'Relax', img: {backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-1.jpg?alt=media")'}, href: '#'},
        {type: 1, name: 'Depilación', img: {backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-3.png?alt=media")'}, href: '#'}
    ];

    // Ordenar los servicios por `type`
    const sortedServices = services.sort((a, b) => a.type - b.type);

  return (
    <div className='flex flex-col min-w-full my-5 lg:max-w-5xl lg:px-32 lg:py-2'>
            <div className='lg:hidden flex flex-row justify-center'>
                <h2 className='banner-services-h2 py-5 text-center text-3xl leading-8 tracking-wider text-typo-color '>Descubrí nuestros servicios</h2>
            </div>
            <div className='hidden lg:flex lg:flex-row lg:justify-start lg:max-w-5xl'>
                <h2 className='banner-services-h2 py-5 leading-8 tracking-wider text-typo-color text-3xl text-left'>Descubrí nuestros servicios</h2>
            </div>
            
        <div className='flex flex-col items-center lg:max-w-5xl lg:flex-row lg:justify-self-center lg:self-center'>
            {sortedServices.map((service) => (
                    <ServicesCard data={service} key={service.name} />
            ))}
        </div>
    </div>
  )
}

export default BannerServices