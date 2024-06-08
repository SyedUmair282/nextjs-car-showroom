'use client'
import React from 'react'
import {CustomButton} from '@/components/index'
import { useRouter } from "next/navigation";
import { updateSearchParams } from '@/utils';

interface Iprop{
    pageNumber: number,
    isNext: boolean
}
const ShowMore:React.FC<Iprop> = ({pageNumber, isNext}) => {
    const router = useRouter();

    const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 10;
      const newPathname = updateSearchParams("limit", `${newLimit}`);
      router.push(newPathname);
    };
    
  return (
    <div style={{ margin: "30px 0px" }}>
      {!isNext && <CustomButton
        title="Show More"
        containerStyle={"show-more"}
        handleClick={handleNavigation}
        btnType="button"
      />}
    </div>
  );

}

export default ShowMore