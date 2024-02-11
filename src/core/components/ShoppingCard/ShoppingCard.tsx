
import { useDispatch, useSelector } from 'react-redux'
import { ProductDto, ProductItem } from '../../models'
import { Button } from 'primereact/button'
import ProductItemCounter from '../ProductItemCounter/ProductItemCounter'
import { useEffect, useState } from 'react'


const ShoppingCard = () => {
    const dispatch=useDispatch()
    const shoppingCard=useSelector((state:any)=>state.shop.shoppingCart)
    const [cardProducts, setCardProducts] = useState<ProductItem[]>([]);
    const totalPrice = () => {
        let total = 0;
        if(shoppingCard.length>0){

            shoppingCard.forEach((product: ProductDto) => {
                const price = Number(product.price);
                if (!isNaN(price)) {
                    total += price;
                }
            });
        
            return total;
        }
    };


  const productCounter = () => {
    const cardProductsMap: { [key: string]: ProductItem } = {};

    shoppingCard.forEach((product: ProductDto) => {
      const productId = product.id.toString();
      if (cardProductsMap[productId]) {
        cardProductsMap[productId].counter++;
      } else {
        cardProductsMap[productId] = {
          name: product.name,
          totalPrice: Number(product.price),
          counter: 1,
        };
      }
    });

    const updatedCardProducts = Object.values(cardProductsMap).filter(
      (item) => item.counter > 0
    );

    setCardProducts(updatedCardProducts);
  };

  const handleIncrement = (productId: string) => {
    const updatedCardProducts = cardProducts.map((item) => {
      if (item.name === productId) {
        return { ...item, counter: item.counter + 1 };
      }
      return item;
    });
    setCardProducts(updatedCardProducts);
  };

  const handleDecrement = (productId: string) => {
    const updatedCardProducts = cardProducts.map((item) => {
      if (item.name === productId) {
        const updatedItem = { ...item, counter: item.counter - 1 };
        if (updatedItem.counter === 0) {
 
        }
        return updatedItem;
      }
      return item;
    });
  
    const filteredProducts = updatedCardProducts.filter((item) => item.counter > 0);
    setCardProducts(filteredProducts);
  
    // Update local storage with the updated shopping cart
    localStorage.setItem("ADD_TO_CART", JSON.stringify(filteredProducts));
  };


  useEffect(() => {
    productCounter();
  }, [shoppingCard]);
  return (
    <div className='flex flex-column gap-3' >
        <div className='card flex flex-column gap-3 shadow-3' >
            {
                cardProducts.map((item,index)=>(
                    <ProductItemCounter
            key={index}
            productItem={item}
            onIncrement={() => handleIncrement(item.name)}
            onDecrement={() => handleDecrement(item.name)}
          />

                ))
            }
            
              
            
        </div>
        <div className='w-full card shadow-3 flex flex-column  gap-3 p-4' >
            <div className='flex align-items-center gap-3' >
            <span className='font-semibold text-xl  ' >Total Price:</span>
            {/* <span className='text-primary text-xl'>{totalPrice()} ₺</span> */}
            </div>
            <Button label='Checkout' className='bg-primary w-full' />
        </div>
    </div>
  )
}

export default ShoppingCard