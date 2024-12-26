import React from 'react';
import { Link } from 'react-router-dom';
//map
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//component
import ContactFrom from './ContactForm';

const position = [-34.877668, -56.028816];

const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
    iconSize: [20, 30]
});
const BannerContact = () => {
    const instagramUrl = 'https://www.instagram.com/adriana_aguilar_esteticista/';
    const phoneNumber = '+59899262217';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    return (
        <div className=' bg-sc-background flex flex-col items-center mt-4'>
            <div className='w-[340px] lg:w-3/4 lg:max-w-6xl lg:px-32 lg:py-2'>
                <h2 className='typo-pathway text-3xl font-normal leading-10 tracking-widest my-4 text-typo-color'>Contacto</h2>
                <div className='flex'>
                    <div className='flex flex-col items-center w-64 h-12 text-center bg-black justify-around mb-5 text-3xl text-white'>
                        <Link to={instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-2 text-gray-800 hover:text-gray-400 duration-500">
                            <ion-icon name="logo-instagram" className='m-0 p-0'></ion-icon>
                        </Link>
                    </div>
                    <button className='flex flex-col items-center w-64 h-12 text-center bg-wp-color justify-around mb-5 text-3xl text-white'>
                        <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-2 text-gray-800 hover:text-gray-400 duration-500">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </Link>
                    </button>
                </div>

                <div className='flex justify-between'>
                    <div className='flex flex-col w-1/2'>
                        <h3 className='font-semibold text-lg leading-6 text-typo-color'>Contacto</h3>
                        <p className='font-light text-sm'> +598 99262217</p>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <h3 className='font-semibold text-lg leading-6 text-typo-color'>Direccion</h3>
                        <p className='font-light text-sm'>Montevideo, Carrasco, Ramblas Tomas Berreta 888</p>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='my-5 relative z-0 lg:w-1/2 lg:pr-2'>
                        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: 400 }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position} icon={icon}></Marker>
                        </MapContainer>
                    </div>

                    <div className='lg:w-1/2 lg:pl-8'>
                        <ContactFrom />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BannerContact