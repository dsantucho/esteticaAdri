import React from 'react';
import TreatmentsCard from './TreatmentsCard';
import { Link } from 'react-router-dom'; 

const BannerTreatments = () => {
    const phoneNumber = '+59899262217'; 
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const treatments = [
        {name: 'EMSculpt', img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/treatments%2Fsculptx1.png?alt=media")'}, href: '#', description: 'EMSculpt combina tecnología avanzada para esculpir tu cuerpo, eliminando grasa localizada mientras tonifica y aumenta la masa muscular. Ideal para quienes buscan resultados visibles sin esfuerzo físico excesivo. Totalmente indoloro, rápido y seguro, es el aliado perfecto para transformar tu figura.'},
        {name: 'Depilación Láser Diodo', img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/treatments%2Fdepix1.png?alt=media")'}, href: '#', description:'Elimina el vello de manera rápida, efectiva y duradera con nuestra tecnología láser de última generación. Diseñada para hombres y mujeres, es ideal para tratar cualquier área del rostro o cuerpo con total seguridad y comodidad. Perfecta para quienes buscan resultados visibles desde las primeras sesiones, sin dolor ni tiempo de recuperación.'},
        {name: 'Hifu - Facial & Corporal',img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/treatments%2Fhifux1.png?alt=media")'}, href: '#', description: 'Redefine tu rostro y esculpe tu cuerpo con la tecnología HIFU, un tratamiento no invasivo que actúa en profundidad para rejuvenecer la piel, estimular la producción de colágeno y eliminar grasa localizada. Ideal para quienes buscan tensar la piel del rostro, reducir arrugas o tonificar áreas como abdomen y muslos. Seguro y con resultados visibles desde las primeras sesiones.'}
    ]


  return (
    <div className='flex flex-col min-w-full my-5 items-center lg:px-32 lg:py-2'>
    <h2 className='banner-services-h2 p-5 text-center text-3xl leading-8 tracking-wider text-typo-color lg:text-3xl lg:text-left'>
        Resultados que transforman: Nuestras 3 tecnologías favoritas
    </h2>
    <div className='flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-evenly w-full lg:max-w-6xl gap-5'>
        {treatments.map((treatment) => (
            <TreatmentsCard data={treatment} key={treatment.name} />
        ))}
    </div>
    <div className='flex w-64 h-16 text-center bg-btn-background justify-around'>
        <button className='text-2xl uppercase text-sc-typo-color'>
            <Link
                to={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-800 hover:text-gray-400 duration-500'
            >
                Contactanos <ion-icon name="logo-whatsapp"></ion-icon>
            </Link>
        </button>
    </div>
</div>

  )
}

export default BannerTreatments