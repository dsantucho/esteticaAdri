import React from 'react'

const BannerFooter = () => {
    const footerImg = {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/footer%2Ffooter-vec-logo-adri.png?alt=media")'
    };
  return (
    <div className='bg-footer-background flex flex-col items-center' >
        <div className='flex flex-col w-[340px] text-footer-typo-color my-4 bg-cover bg-center overflow-hidden' style={footerImg}>
            <h2 className='text-2xl font-bold leading-8 tracking-wider'>Servicio</h2>
            <span className='font-light text-sm tracking-wider my-1'>Relax</span>
            <span className='font-light text-sm tracking-wider my-1'>Depilacion</span>
            <span className='font-light text-sm tracking-wider my-1'>Tratamientos Corporales</span>
            <span className='font-light text-sm tracking-wider my-1'>Tratamientos Masculinos</span>
            <h2 className='text-2xl font-bold leading-8 tracking-wider'>Horarios de Atencion</h2>
            <span className='font-light text-sm tracking-wider my-1'>Lunes a Viernes 10am - 19pm</span>
            <h2 className='text-2xl font-bold leading-8 tracking-wider'>Explorar</h2>
            <span className='font-light text-sm tracking-wider my-1'>Home</span>
            <span className='font-light text-sm tracking-wider my-1'>Servicios</span>
            <span className='font-light text-sm tracking-wider my-1'>Sobre nosotros</span>
            <span className='font-light text-sm tracking-wider my-1'>Contacto</span>
            <h2 className='text-2xl font-bold leading-8 tracking-wider'>Contactos</h2>
            <span className='font-light text-sm tracking-wider my-1'>Direccion: 1234 Carrasco, Montevideo</span>
            <span className='font-light text-sm tracking-wider my-1'>Whatsapp: +589 94943434</span>
            <span className='font-light text-sm tracking-wider my-1'>Redes</span>
        </div>

    </div>
  )
}

export default BannerFooter