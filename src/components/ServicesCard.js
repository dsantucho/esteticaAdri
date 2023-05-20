import React from 'react'

const ServicesCard = ({data}) => {
  return (
    <div className='h-[350px] w-[325px] border-2 flex flex-col  justify-end overflow-hidden items-center bg-cover bg-center'
    style={data.img}>
        
        <div className='flex p-7 justify-center align-middle'>
            <h2 className='text-center text-xl font-light leading-6 text-white'>{data.name} <ion-icon name="chevron-forward-outline"></ion-icon></h2>
            
        </div>

    </div>
  )
}

export default ServicesCard