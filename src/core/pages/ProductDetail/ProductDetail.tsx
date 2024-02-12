
import { useDispatch, useSelector } from 'react-redux'
import { CardItem, ProductDto } from '../../models'
import { Button } from 'primereact/button'
import {  AddCart, selectProduct, } from '../../redux/actions/actionCreator'
import { Toast } from 'primereact/toast'
import { useEffect, useRef } from 'react'
import ShoppingCard from '../../components/ShoppingCard/ShoppingCard'

const ProductDetail = () => {
  const toast=useRef<Toast>(null)
  const dispatch=useDispatch()
  const selectedProduct:ProductDto=useSelector((state:any)=>state.shop.product)
  
  
  const handleAddToCart = (product: ProductDto) => {
    dispatch(AddCart(product)); 
    toast.current?.show({ severity: 'info', summary: 'Ürün Eklendi', detail: 'Ürün Sepetinize Eklendi' });
}


  useEffect(() => {
    if(localStorage.getItem("SELECTED_PRODUCT")){
      const selectedProducts=JSON.parse(localStorage.getItem('SELECTED_PRODUCT'))
      dispatch(selectProduct(selectedProducts))
    }
  }, [])
  
  return (
    <>
    
    <Toast ref={toast} />
    {
    
        <div className='p-fluid grid  mt-3 p-3' >
        <div className=' col-12 md:col-9' >
      <div className=' flex md:flex-row flex-column align-items-center card shadow-3 gap-0 md:gap-3' >
          <img src={selectedProduct.image} className='w-full' />
          <div className="flex flex-column gap-4 mt-3 mb-3 mx-3" >
            <span className='font-medium text-3xl' >{selectedProduct.name}</span>
            <span className='font-semibold text-3xl text-primary' >{selectedProduct.price}₺</span>
            <Button label='Add To Card'  className='bg-primary' onClick={(e)=>handleAddToCart(selectedProduct)} />
            <span className='font-regular' >{selectedProduct.description}</span>
          </div>
      </div>
        </div>
        <div className='col-12 md:col-3 card h-min sticky ' style={{top:'68px'}}>
          <ShoppingCard/>
        </div>
       
      </div>
   
    }
    </>
  )
}

export default ProductDetail