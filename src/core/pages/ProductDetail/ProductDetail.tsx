
import { useDispatch, useSelector } from 'react-redux'
import { CardItem, ProductDto } from '../../models'
import { Button } from 'primereact/button'
import {  addToCart, selectProduct, } from '../../redux/actions/actionCreator'
import { Toast } from 'primereact/toast'
import { useEffect, useRef } from 'react'

const ProductDetail = () => {
  const toast=useRef<Toast>(null)
  const dispatch=useDispatch()
  const selectedProduct:CardItem=useSelector((state:any)=>state.shop.product)
  
  const handleAddToCart = (product: ProductDto) => {
    toast.current?.show({severity:'info',summary:'Ürün Eklendi',detail:'Ürün Sepetinize Eklendi'})
    let prevQuantity = selectedProduct ? selectedProduct.quantity : 0;

    
    let updatedProduct ={product,quantity:prevQuantity+1}
    updatedProduct={ product, quantity: prevQuantity + 1 };
    dispatch(addToCart(updatedProduct)); 
}


  useEffect(() => {
    if(localStorage.getItem('SELECTED_PRODUCT')){
      // @ts-ignore
      const selectedProduct= JSON.parse(localStorage.getItem('SELECTED_PRODUCT'))
    dispatch(selectProduct(selectedProduct))
    }
  }, [])
  
  return (
    <>
    
    <Toast ref={toast} />
    {
    
        <div className='w-full grid flex align-items-center justify-content-center mt-3' >
        <div className=' col-12 md:col-8' >
      <div className=' flex align-items-center card shadow-3 gap-3' >
          <img src={selectedProduct.product.image} />
          <div className="flex flex-column gap-4" >
            <span className='font-medium text-3xl' >{selectedProduct.product.name}</span>
            <span className='font-semibold text-3xl text-primary' >{selectedProduct.product.price}₺</span>
            <Button label='Add To Card'  className='bg-primary mx-1' onClick={(e)=>handleAddToCart(selectedProduct.product)} />
            <span className='font-regular text-lg' >{selectedProduct.product.description}</span>
          </div>
      </div>
        </div>
        <div className='col-12 md:col-3 card '>
          {/* <ShoppingCard/> */}
        </div>
       
      </div>
   
    }
    </>
  )
}

export default ProductDetail