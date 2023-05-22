import React from 'react'

const ServicesCard = ({data}) => {
  return (
    <div className='cardServicesCard h-[350px] w-[325px] border-2 flex flex-col  justify-end overflow-hidden items-center bg-cover bg-center'
    style={data.img}>
        
        <div className='serviceCardTiteleBox w-full flex p-6 justify-center align-middle text-center'>
            <div>
                <h2 className='text-center text-xl font-light leading-6 text-white'>{data.name} </h2>
            </div>
            <div className='text-center text-xl font-light leading-6 text-white mt-1 pl-1'>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>

    </div>
  )
}

export default ServicesCard