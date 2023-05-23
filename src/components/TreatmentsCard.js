import React from 'react'

const TreatmentsCard = ({data}) => {
    return (
        <div className='my-3'>
            <div className='h-[320px] w-[340px] flex flex-col  justify-end overflow-hidden items-center bg-center'
            style={data.img}></div>
            <div className='bg-sc-background w-[340px] flex flex-col p-5 justify-center align-middle text-start'>
                <div>
                    <h2 className='text-xl font-light leading-6 text-typo-color my-3'>{data.name} </h2>
                </div>
                <div>
                    <span className='text-l font-extralight leading-6 text-typo-color'>{data.description} </span>
                </div>
            </div>
        </div>
      )
}

export default TreatmentsCard