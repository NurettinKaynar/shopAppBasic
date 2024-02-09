import React from 'react'
import { RadioButton } from 'primereact/radiobutton';
import { SortByEnum } from '../../enums';
import SortByComponent from '../../components/SortByComponent/SortByComponent';
const Home = () => {
  return (
    <div className='w-full flex justify-content-center flex-1 pt-6' >

<div className="flex w-full gap-3 md:w-9">
    <div className="flex-none flex-column flex gap-4 w-3">
        <SortByComponent/>
        <SortByComponent/>
    </div>
    <div className="flex-grow-1 flex align-items-center justify-content-center bg-primary font-bold m-2 h-screen px-5 py-3 border-round">PrimeFlex</div>
    <div className="flex-none flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">PrimeFlex</div>
</div>
    </div>
  )
}

export default Home