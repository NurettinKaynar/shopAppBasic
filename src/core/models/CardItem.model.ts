import { ProductDto } from "./ProductDto.model";

export interface CardItem{
    product:ProductDto[],
    quantity:number
}