'use client'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '@/components'
import Image from 'next/image'

const Hero:React.FC = () => {

  const handleScroll = () => {
    let explore_cars = document.getElementById('discover');
    explore_cars?.scrollIntoView({
      behavior: 'smooth'
    }); 
  }

  return (
    <div className='hero'>
        <div className='hero__left'>
          <h1 className='hero__title'>Find, book, or rent car – quickly and easily!</h1>
          <p className='hero__subtitle'>
            Streamline your car rental experience
            with our effortless booking process.
          </p>
          <CustomButton
            title="Explore Cars"
            containerStyle={'hero__explore__btn'}
            handleClick={handleScroll}
            btnType='button'          
          />
        </div>
        <div className='hero__right'>
          <div className='hero__image'>
            <Image src={"/hero.png"} fill alt='img' style={{objectFit:"contain"}}/>
            <div className='hero__image-overlay' />
          </div>
        </div>
    </div>
  )
}

export default Hero