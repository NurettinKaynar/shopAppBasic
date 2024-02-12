import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CardItem, ProductDto, ProductItem } from '../../models';
import { Link } from 'react-router-dom';
const Navbar = ({onSearch}:{onSearch:any}) => {
  const [searchInput, setSearchInput] = useState<string>('')

  const handleChange = (e:any) => {
    const text = e.target.value;
    setSearchInput(text);
    onSearch(text);
  };
  const shoppingCard=useSelector((state:any)=>state.shop.Carts)

    const handleTotalPrice=()=>{      
      let totalPrice=0
      shoppingCard.forEach((product:ProductItem) => {
        
        totalPrice+=product.quantity * Number(product.price);
      });
      return totalPrice
    }
   const start =( 
    <div className='flex align-items-center gap-2 md:gap-7'>

        <Link to={'/'}><span className='font-semibold text-xl text-white' >deneme</span></Link>
        <span className=" p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
        className=" w-10rem md:w-20rem "
        placeholder="Search By Product Name"
        value={searchInput}
        onChange={handleChange} />
      </span>
    </div>
   );
    const end = (
        <div className="flex align-items-center gap-4 md:gap-7 text-white">
            <div className='flex align-items-center gap-2' >
            <i className='pi pi-shopping-bag' ></i>
            <span className='hidden md:inline-block font-medium' >{handleTotalPrice()} ₺</span>
            </div>
            <div className='flex align-items-center gap-2' >
            <i className='pi pi-user' ></i>
            <span className='hidden md:inline-block font-medium' >Nurettin KAYNAR</span>
            </div>
        </div>
    );

  return (
    <div className='w-full top-0 sticky flex justify-content-center bg-blue-500 px-2 z-5'>
    <Menubar className='bg-blue-500 text-white md:w-9 w-full border-none' start={start} end={end} />
    </div>
  )
}

export default Navbar