import React from 'react';
//map
import { MapContainer, TileLayer, Marker,useMap, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//component
import ContactFrom from './ContactForm';

const position = [-34.877668, -56.028816];

const icon = L.icon({ 
    iconRetinaUrl:iconRetina, 
    iconUrl: iconMarker, 
    shadowUrl: iconShadow,
    iconSize: [20,30]
});
const BannerContact = () => {
  return (
    <div className=' bg-sc-background flex flex-col items-center my-4'>
        <div className='w-[340px]'>
            <h2 className='typo-pathway text-3xl font-normal leading-10 tracking-widest my-4 text-typo-color'>Contacto</h2>
            <div className='flex'>
                <button className='flex flex-col items-center w-64 h-12 text-center bg-black justify-around mb-5 text-3xl text-white'>
                    <ion-icon name="logo-instagram"></ion-icon>
                </button>
                <button className='flex flex-col items-center w-64 h-12 text-center bg-wp-color justify-around mb-5 text-3xl text-white'>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </button>
            </div>

            <div className='flex justify-between'>
                <div className='flex flex-col w-1/2'>
                    <h3 className='font-semibold text-xl leading-6 text-typo-color'>Contacto</h3>
                    <p className='font-light text-sm'> +589 98989898</p>
                </div>
                <div className='flex flex-col w-1/2'>
                    <h3 className='font-semibold text-xl leading-6 text-typo-color'>Direccion</h3>
                    <p className='font-light text-sm'>Montevideo, Carrasco, Calle 12345</p>
                </div>
            </div>
            <div className='my-5'>
                <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: 400 }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={icon}></Marker>
                </MapContainer>
            </div>

            <div>
                <ContactFrom/>
            </div>
        </div>
    </div>
  )
}

export default BannerContact