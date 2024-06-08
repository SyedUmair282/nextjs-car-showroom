'use client'
import React from 'react'
import { selectType } from '@/types'

interface Iprop {
  data:selectType[]
}

const CustomFilter:React.FC<Iprop> = ({data}) => {

  const handleYear = (e:any) => {
    console.log("check year==>",e.target.value)
  }
  return (
    <div>
        <select className='custom__filter-select' name="cars" id="cars" onChange={(e)=>handleYear(e)}>
          {data.map((value,index)=>{
            return <option value={value.value} key={index}>{value.title}</option>
          })}            
        </select>
    </div>
  )
}

export default CustomFilter;