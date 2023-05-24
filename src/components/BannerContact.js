import React from 'react'

const BannerContact = () => {
  return (
    <div className=' bg-sc-background flex flex-col items-center my-4'>
        <div className='w-[340px]'>
            <h2 className='typo-pathway text-2xl font-normal leading-10 tracking-widest my-4'>Contacto</h2>
            <div className='flex'>
                <button className='flex flex-col items-center w-64 h-12 text-center bg-black justify-around mb-5 text-3xl text-white'>
                    <ion-icon name="logo-instagram"></ion-icon>
                </button>
                <button className='flex flex-col items-center w-64 h-12 text-center bg-wp-color justify-around mb-5 text-3xl text-white'>
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </button>
            </div>

            <div>Direcc y tel</div>
            <div>MAP</div>
            <div>FORM</div>
        </div>
    </div>
  )
}

export default BannerContact