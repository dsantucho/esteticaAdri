import React from 'react';
import TreatmentsCard from './TreatmentsCard';

const BannerTreatments = () => {
    const treatments = [
        {name: 'EMSculpt', img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/treatments%2Fsculptx1.png?alt=media")'}, href: '#', description: 'EMSculpt es un tratamiento único que esculpe su cuerpo disminuyendo la grasa difícil de quemar a la vez que gana masa muscular. Es indoloro, muy eficaz y seguro.'},
        {name: 'Depilacion Laser Diodo', img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/treatments%2Fdepix1.png?alt=media")'}, href: '#', description:'Nuestro equipo está diseñado tanto para hombres como para mujeres, para abordar cualquier área de preocupación en su cara o cuerpo utilizando la última tecnología láser.'},
        {name: 'Hifu - Facial & Corporal',img:{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/treatments%2Fhifux1.png?alt=media")'}, href: '#', description: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.'}
    ]


  return (
    <div className='flex flex-col min-w-full my-5 items-center '>
        <h2 className='banner-services-h2 p-5 text-center text-3xl leading-8 tracking-wider text-typo-color'>Los tratamientos estéticos más efectivos con nuestras 3 máquinas favoritas</h2>
        <div className='flex flex-col items-center'>
            {
                treatments.map((treatment) => (
                    <TreatmentsCard data = {treatment} key={treatment.name}/>
                ))
            }
        </div>
        <div className='flex w-64 h-16 text-center bg-btn-background justify-around' >
                <button className='text-2xl uppercase text-sc-typo-color'>Contactanos <ion-icon name="logo-whatsapp"></ion-icon></button>
        </div>
    </div>
  )
}

export default BannerTreatments