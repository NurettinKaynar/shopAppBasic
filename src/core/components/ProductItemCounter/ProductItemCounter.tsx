import React from 'react';
import { ProductItem } from '../../models';

interface Props {
  productItem: ProductItem;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ProductItemCounter: React.FC<Props> = ({ productItem, onIncrement, onDecrement }) => {
  return (
    <div className='w-full flex align-items-center p-4'>
      <div className='flex flex-grow-1 flex-column'>
        <span className='font-medium text-2xl'>{productItem.name}</span>
        <span className='font-medium text-primary text-lg'>{productItem.totalPrice} ₺</span>
      </div>
      <div id="buttons" className='flex flex-none bg-gray-100'>
        <div className='border-round-left p-3 cursor-pointer hover:bg-primary' onClick={onDecrement}>-</div>
        <span className='font-medium p-3 bg-primary text-white'>{productItem.counter}</span>
        <div className='border-round-right cursor-pointer hover:bg-primary p-3' onClick={onIncrement}>+</div>
      </div>
    </div>
  );
};

export default ProductItemCounter;
