import { AxiosError, AxiosResponse } from 'axios';
import SortByBrandsComponent from '../../components/SortByBrands/SortByBrandsComponent';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import SortByComponent from '../../components/SortByComponent/SortByComponent';
import { get } from '../../services/HttpEntityService';
import { ProductDto } from '../../models';
import { useEffect, useState } from 'react';
import ProductSmallCard from '../../components/ProductSmallCard/ProductSmallCard';
import { SortByEnum } from '../../enums';
import ShoppingCard from '../../components/ShoppingCard/ShoppingCard';
import SortByModelsComponent from '../../components/SortByModels/SortByModelsComponent';
const Home = ({searchValue}:{searchValue:string}) => {
  const [products, setProducts] = useState<ProductDto[]>()
  const [brands, setBrands] = useState<string[]>()
  const [models, setModels] = useState<string[]>()
  const [filteredProducts, setFilteredProducts] = useState<ProductDto[]>([]);
  


  const handleGetAllProducts=()=>{
    get().then((res:AxiosResponse<ProductDto[]>)=>{
      if(res.status===200){
        setProducts(res.data)
        getAllBrands(res.data)
        getAllModels(res.data)
      }
    }).catch((err:AxiosError)=>{
      console.error("Ürünler Getirilemedi",err);
    })
  }

  const getAllBrands=(products:ProductDto[])=>{
    
    setBrands(products?.map(product=>product.brand))
  }
  const getAllModels=(products:ProductDto[])=>{
    setModels(products?.map(product=>product.model))
  }
  const handleRadioButtonChange = (selectedRadioButton: SortByEnum) => {
    let sortedProducts: ProductDto[] = [];
    switch (selectedRadioButton) {
        case SortByEnum.NewToOld:
            sortedProducts = products?.slice().sort((a: ProductDto, b: ProductDto) => {
                if (a.createdAt && b.createdAt) {
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                }
                return 0;
            }) || [];
            break;
        case SortByEnum.OldToNew:
            sortedProducts = products?.slice().sort((a: ProductDto, b: ProductDto) => {
                if (a.createdAt && b.createdAt) {
                    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                }
                return 0;
            }) || [];
            break;
        case SortByEnum.PriceHighToLow:
            sortedProducts = products?.slice().sort((a: ProductDto, b: ProductDto) => {
                if (a.price && b.price) {
                    return Number( b.price) - Number(a.price);
                }
                return 0;
            }) || [];
            break;
        case SortByEnum.PriceLowToHigh:
            sortedProducts = products?.slice().sort((a: ProductDto, b: ProductDto) => {
                if (a.price && b.price) {
                    return Number( a.price) - Number(b.price);
                }
                return 0;
            }) || [];
            break;

    }
    setFilteredProducts(sortedProducts);
};

  const sortByBrand = (selectedBrands: string[]) => {

    
    if (selectedBrands.length === 0 && products) {
      setFilteredProducts(products);
    } else {
      const filtered = products?.filter(product => selectedBrands.includes(product.brand || ''));
      if(filtered)
      setFilteredProducts(filtered);
    }
  };
  const sortByModel = (selectedModel: string[]) => {

    
    if (selectedModel.length === 0 && products) {
      setFilteredProducts(products);
    } else {
      const filtered = products?.filter(product => selectedModel.includes(product.model || ''));
      if(filtered)
      setFilteredProducts(filtered);
    }
  };

  const itemTemplate = (product: ProductDto) => {
    if (!product) {
        return;
    }
   else return <ProductSmallCard CardsData={product} />
};





  useEffect(() => {
    handleGetAllProducts()
    if(products && searchValue){
      setFilteredProducts(products?.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    ))
    }
  }, [searchValue])
  
  return (
    <div className='w-full flex  md:justify-content-center pt-6 p-6' >

<div className=" flex w-full md:flex-row flex-column gap-1">
    <div style={{top:'68px'}}  className=" sticky h-min flex-grow-1 md:flex-none flex-column flex gap-4 w-full md:w-2">
        <SortByComponent onRadioButtonChange={handleRadioButtonChange}/>
        {
          brands?
        <SortByBrandsComponent brands={brands} onCheckboxChange={sortByBrand} />
        :null
        }{
          models?
          <SortByModelsComponent models={models} onCheckboxChange={sortByModel}/>
          :null
        }
    </div>
    <div className="flex-grow-1  px-5">
    <DataView value={filteredProducts?filteredProducts:products} itemTemplate={itemTemplate} layout="grid"   paginator rows={12} />
    </div>
    <div style={{top:'68px'}} className="flex-none sticky  h-min md:w-3 w-full  ">
      <ShoppingCard/>
    </div>
</div>
    </div>
  )
}

export default Home