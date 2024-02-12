import React, { useRef } from 'react'
import { CardItem, ProductDto } from '../../models'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddCart, selectProduct } from '../../redux/actions/actionCreator';
import { Toast } from 'primereact/toast';

const ProductSmallCard = ({CardsData}:{CardsData:ProductDto}) => {
  const navigation=useNavigate()
  const dispatch=useDispatch()

  const toast=useRef<Toast>(null)

  const handleAddToCart = (product: ProductDto) => {
    dispatch(AddCart(product)); 
    toast.current?.show({ severity: 'info', summary: 'Ürün Eklendi', detail: 'Ürün Sepetinize Eklendi' });
}




  const handleOnboard=()=>{
    dispatch(selectProduct(CardsData))
    navigation('/ProductDetail')
  }
  return (
    <>
        <Toast ref={toast} />
    <div className='col-12 sm:col-6 lg:col-12 xl:col-4 p-2 ' >
      <div className='hover:shadow-3 w-full p-2 flex flex-column align-items-center gap-3 border-round border-gray-300 border-1'>

     
    <Link to={'/ProductDetail'}  onClick={handleOnboard} className='text-color cursor-pointer  ' >
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
    </Link>
        <div className="w-full flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">{CardsData.price} ₺</span>
                        <Button icon="pi pi-shopping-cart" onClick={(e)=>handleAddToCart(CardsData)} className='p-button-rounded p-button-outlined' ></Button>
                    </div>
      </div>
    </div>
    </>
  )
}

export default ProductSmallCard