'use client'
import React,{useState} from 'react'
import Image from 'next/image';
import { carType } from '@/types';
import {CardDetails, CustomButton} from '@/components/index'

interface Iprop{
  data:carType
}

const Cards:React.FC<Iprop> = ({data}) => {
  const [isOpen,setIsOpen]=useState<boolean>(false);
  return (
    <div className="cards">
      <span>{data.make} {data.model}</span>
      <div>
        <sup className="small-text">$</sup>
        {data.price}
        <sub className="small-text">/day</sub>
      </div>
      <div className="card-img">
        <Image src="/car.png" alt="img" fill objectFit="contain" />
      </div>
      <div className="card-footer">
        <div className="card__footer-element">
          <Image src="/steering-wheel.svg" alt="img" width={17} height={17} />
          <span>Automatic</span>
        </div>

        <div className="card__footer-element">
          <Image src="/tire.svg" alt="img" width={17} height={17} />
          <span>PWD</span>
        </div>

        <div className="card__footer-element">
          <Image src="/gas.svg" alt="img" width={17} height={17} />
          <span>{data.horsepower} MPG</span>
        </div>
      </div>
      <div className="view-more__container">
        <CustomButton
          title="View More"
          containerStyle={"view-more"}
          handleClick={()=>setIsOpen(true)}
          btnType="button"
        />
      </div>
      <CardDetails isOpen={isOpen} closeModal={()=>{setIsOpen(false)}} carData={data}/>
    </div>
  );
}

export default Cards;