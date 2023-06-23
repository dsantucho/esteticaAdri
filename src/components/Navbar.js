import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

//img
import navMobileLogo from "../img/nav-mobile-logo2.png";



export default function Navbar() {
    //menu options
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'Servicios', href: '/services', current: false },
        { name: 'Sobre Nosotros', href: '/about', current: false },
        { name: 'Contacto', href: '/contact', current: false },
    ]
    const instagramUrl = 'https://www.instagram.com/adriana_aguilar_esteticista/';

    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0  bg-background z-50'>
            <div className='flex justify-between pb-4 md:inline fix-max-width'>
                <div className='flex justify-center'>
                    <img alt='mobileLogo' src={navMobileLogo} className='object-contain p-2 my-2 flex w-10/12 md:w-96'></img>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-2 top-14 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:h-12 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:justify-evenly pl-9 md:pl-0 transition-none  bg-background ${open ? 'top-32' : 'top-[-490px] borderNav'} ${open ? '': 'borderNav'}`}>
                    {
                        navigation.map((navigation) => (
                            <li key={navigation.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={navigation.href} className='text-gray-800 hover:text-gray-400 duration-500'>{navigation.name}</Link>
                            </li>
                        ))
                    }
                    <li className="text-2xl pt-1.5">
                        <Link to={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-400 duration-500">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
}
