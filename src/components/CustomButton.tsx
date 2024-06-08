'use client'
import React from 'react'
import { CustomButtonProps } from '@/types'
const CustomButton:React.FC<CustomButtonProps> = ({title,containerStyle,handleClick,btnType}) => {
  return (
    <button
        disabled={false}
        type={btnType}
        className={`custom-btn ${containerStyle}`}
        onClick={handleClick}
    >
        <span style={{flex:1}}>
            {title}
        </span>

    </button>
  )
}

export default CustomButton;