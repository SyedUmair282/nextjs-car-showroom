import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string,
    containerStyle?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType: "button" | "submit"
}

export interface carType {
    id: number
    make: string
    model: string
    year: number
    color: string
    mileage: number
    price: number
    fuelType: string
    transmission: string
    engine: string
    horsepower: number
    features: string[]
    owners: number
    image: string
}

export interface selectType {
    title: string
    value: string
}

export interface homeProps {
    searchParams:filters
}

export interface filters {
    limit?:number
}
