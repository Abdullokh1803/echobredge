import React from 'react'
import Image from 'next/image';


type cardAdvantagesProps = {
    img: string,
    title: string,
    subtitle: string
}

const CardAdvantages = ({img, title, subtitle}: cardAdvantagesProps) => {
  return (
    <div>
        <Image src={img} alt={title} width={80} height={80} className='object-contain mx-auto' />
        <h1 className='text-center text-lg mt-5 mb-5 font-semibold text-gray-800'>{title}</h1>
        <p className='text-gray-600 text-center font-medium text-sm mb-7'>{subtitle}</p>
    </div>
  )
}

export default CardAdvantages