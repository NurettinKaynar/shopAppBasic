
import { Button } from 'primereact/button'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductItemCounter from '../ProductItemCounter/ProductItemCounter'
import { ProductItem } from '../../models'
import { DecreaseQuantity, IncreaseQuantity } from '../../redux/actions/actionCreator'


const ShoppingCard = () => {
  const dispatch=useDispatch()
    const shoppingCard=useSelector((state:any)=>state.shop.Carts)

    const handleTotalPrice=()=>{      
      let totalPrice=0
      shoppingCard.forEach((product:ProductItem) => {
        
        totalPrice+=product.quantity * Number(product.price);
      });
      return totalPrice
    }
  const handleIncrement = (key: number) => {
    dispatch(IncreaseQuantity(key))
  };

  const handleDecrement = (key: number) => {
    dispatch(DecreaseQuantity(key))
  };


  useEffect(() => {
  }, [shoppingCard]);
  return (
    <div className='flex flex-column gap-3' >
      {
        shoppingCard&& shoppingCard.length>0?
        (
          <>
          <div className='card flex flex-column gap-3 shadow-3' >
            {
                shoppingCard.map((item:any,index:number)=>(
                    <ProductItemCounter
            key={index}
            productItem={item}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
          />

                ))
            }
            
              
            
        </div>
        <div className='w-full card shadow-3 flex flex-column  gap-3 p-4' >
            <div className='flex align-items-center gap-3' >
            <span className='font-semibold text-xl  ' >Total Price:</span>
            <span className='text-primary text-xl'>{handleTotalPrice()} ₺</span>
            </div>
            <Button label='Checkout' className='bg-primary w-full' />
        </div>
        </>
        )
        :null
      }
        
    </div>
  )
}

export default ShoppingCard