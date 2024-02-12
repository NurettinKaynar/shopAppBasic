import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from './core/components/Navbar/Navbar';
import Home from './core/pages/Home/Home';
import { useEffect, useState } from "react";
import ProductDetail from "./core/pages/ProductDetail/ProductDetail";
import { PrimeReactProvider } from 'primereact/api';
import { useDispatch } from "react-redux";
import {  AddCart, selectProduct } from "./core/redux/actions/actionCreator";
import { ProductItem } from "./core/models";

function App() {
  const [searchText, setSearchText] = useState('');
  const dispatch=useDispatch()
  const handleSearch = (text:string) => {
    setSearchText(text);
  };
  useEffect(() => {
    if(localStorage.getItem("SELECTED_PRODUCT")){
      const selectedProducts=JSON.parse(localStorage.getItem('SELECTED_PRODUCT'))
      dispatch(selectProduct(selectedProducts))
    }
    if(localStorage.getItem('SHOPPING_CARTS')){
      const shoppingCart=JSON.parse(localStorage.getItem('SHOPPING_CARTS'))
        shoppingCart.forEach((product:ProductItem)=>{

          dispatch(AddCart(product))
        })
    }

  }, [])
  

  return (
    
    
    <PrimeReactProvider>
   
    <BrowserRouter>
      <Navbar onSearch={handleSearch}/>
    <Routes >
     
      <Route path='/' element={<Home searchValue={searchText} />} />
      <Route path="/ProductDetail" element={<ProductDetail/>} />
     
      </Routes>
    </BrowserRouter>
    </PrimeReactProvider>

  );
}

export default App;
