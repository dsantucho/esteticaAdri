import React, { useState } from 'react';

//img
import navMobileLogo from "../img/nav-mobile-logo2.png";



export default function Navbar() {
    //menu options
    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'Servicios', href: '#', current: false },
        { name: 'Sobre Nosotros', href: '#', current: false },
        { name: 'Contacto', href: '#', current: false },
    ]
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='flex justify-between bg-background pb-4 md:inline '>
                <div className='flex justify-center'>
                    <img src={navMobileLogo} className='object-contain p-2 my-2 flex w-10/12 md:w-96'></img>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-2 top-14 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:justify-around pl-9 md:pl-0 transition-all duration-500 ease-in ${open ? 'top-32' : 'top-[-490px] borderNav'} `}>
                    {
                        navigation.map((navigation) => (
                            <li key={navigation.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={navigation.href} className='text-gray-800 hover:text-gray-400 duration-500'>{navigation.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
