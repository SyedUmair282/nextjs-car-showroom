import {Hero,SearchBar,CustomFilter,Cards} from '@/components/index'
import { fetchCars } from "@/utils";
import { carType, homeProps, filters } from "@/types";
import {fuels, yearsOfProduction} from '@/constants/index'
import ShowMore from '@/components/ShowMore';

export default async function Home({searchParams}:homeProps) {

  let carsData:carType[] = await fetchCars({limit:searchParams.limit || 10});
  let isDataEmpty:boolean = !Array.isArray(carsData) || carsData.length < 1 || !carsData

  return (
    <div style={{ overflow: "hidden" }}>
      <Hero />
      <div className="mid-container" id="discover">
        <div className="mid-container__heading">
          <span className="mid-container__heading__title">Car Catalogue</span>
          <span className="mid-container__heading__bottom">
            Explore the cars you might like
          </span>
        </div>

        {/* search filter */}
        <div className="home__filter">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter data={fuels} />
            <CustomFilter data={yearsOfProduction} />
          </div>
        </div>

        {/* Car catalogue */}
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">              
              {carsData?.map((value,index)=>{
                return <Cards key={index} data={value} />
              })}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2>Oops, no results</h2>
            <span>Cars data working in progress!</span>
          </div>
        )}

        <ShowMore 
          pageNumber={(searchParams.limit || 10) / 10}
          isNext={(searchParams.limit || 10) > carsData.length}
        />
        
      </div>
    </div>
  );
}
