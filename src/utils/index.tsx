import { filters } from "@/types"

const fetchCars = async (filter:filters) => {
  const {limit} = filter;
  const res = await fetch(`https://freetestapi.com/api/v1/cars?limit=${limit}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const updateSearchParams = (type:string,value:string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
}

export{
    fetchCars,
    updateSearchParams
}