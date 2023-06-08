import React from 'react';
import { Link } from 'react-router-dom'; 

const BannerFooter = () => {
    const footerImg = {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/footer%2Ffooter-vec-logo-adri.png?alt=media")'
    };
    const instagramUrl = 'https://www.instagram.com/adriana_aguilar_esteticista/';
  return (
    <div className='bg-footer-background flex flex-col items-center pt-3 lg:pt-6' >
        <div className='flex flex-col w-[340px] text-footer-typo-color my-4 bg-cover bg-center overflow-hidden opacity-75 footer-background lg:w-3/4 lg:flex-row lg:p-10'>
            <div className='flex flex-col lg:w-1/2'>
              <h2 className='text-2xl font-bold leading-8 tracking-wider mt-3 mb-1'>Servicio</h2>
              <span className='font-light text-sm tracking-wider my-1'>Relax</span>
              <span className='font-light text-sm tracking-wider my-1'>Depilacion</span>
              <span className='font-light text-sm tracking-wider my-1'>Tratamientos Corporales</span>
              <span className='font-light text-sm tracking-wider my-1'>Tratamientos Masculinos</span>

              <h2 className='text-2xl font-bold leading-8 tracking-wider mt-3 mb-1'>Horarios de Atencion</h2>
              <span className='font-light text-sm tracking-wider my-1'>Lunes a Viernes 10am - 19pm</span>
            </div>

            <div className='flex flex-col lg:w-1/2'>
              <h2 className='text-2xl font-bold leading-8 tracking-wider mt-3 mb-1'>Explorar</h2>
              <span className='font-light text-sm tracking-wider my-1'>Home</span>
              <span className='font-light text-sm tracking-wider my-1'>Servicios</span>
              <span className='font-light text-sm tracking-wider my-1'>Sobre nosotros</span>
              <span className='font-light text-sm tracking-wider my-1'>Contacto</span>

              <h2 className='text-2xl font-bold leading-8 tracking-wider mt-3 mb-1'>Contactos</h2>
              <span className='font-light text-sm tracking-wider my-1'>Direccion: 1234 Carrasco, Montevideo</span>
              <span className='font-light text-sm tracking-wider my-1'>Whatsapp: +589 94943434</span>

                  <div className='flex my-1'>
                    <div className='flex flex-col items-center text-center justify-around text-3xl text-white'>
                      <Link to={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-400 duration-500">
                          <ion-icon name="logo-instagram" className='m-0 p-0'></ion-icon>
                      </Link>
                    </div>
                    <div className='flex flex-col items-center  text-center justify-around ml-5 text-3xl text-white'>
                        <Link to={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-400 duration-500">
                          <ion-icon name="logo-whatsapp"></ion-icon>
                        </Link>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default BannerFooter