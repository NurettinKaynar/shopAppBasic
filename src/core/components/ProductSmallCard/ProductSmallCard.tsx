import React from 'react'
import { ProductDto } from '../../models'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button';

const ProductSmallCard = ({CardsData}:{CardsData:ProductDto}) => {
  return (
    <div className='col-12 sm:col-6 lg:col-12 xl:col-4 p-2 ' >

    <div className='w-full p-2 flex flex-column align-items-center gap-3 border-round border-gray-300 border-1 ' >
        <div className='w-full flex justify-content-between' >
            <div className='flex align-items-center gap-2' >
            <i className="pi pi-tag"></i>
            <span className='font-semibold' >{CardsData.brand}</span>
            </div>
            <Tag value={CardsData.model}></Tag>
        </div>
        <div className='w-full flex flex-column justify-content-center align-items-center gap-2' >
            <img src={CardsData.image} className='w-9 shadow-2 border-round' />
            <div className="text-2xl font-bold">{CardsData.name}</div>
        </div>
        <div className="w-full flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">{CardsData.price} ₺</span>
                        <Button icon="pi pi-shopping-cart" className='p-button-rounded p-button-outlined' ></Button>
                    </div>
    </div>
    </div>
  )
}

export default ProductSmallCard