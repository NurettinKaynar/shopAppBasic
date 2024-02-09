import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
const Navbar = () => {
  
   const start =( 
    <div className='flex align-items-center gap-2 md:gap-7'>

        <span className='font-semibold text-xl text-white' >deneme</span>
        <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
    </div>
   );
    const end = (
        <div className="flex align-items-center gap-4 md:gap-7 text-white">
            <div className='flex align-items-center gap-2' >
            <i className='pi pi-shopping-bag' ></i>
            <span className='hidden md:inline-block font-medium' >17.000 ₺</span>
            </div>
            <div className='flex align-items-center gap-2' >
            <i className='pi pi-user' ></i>
            <span className='hidden md:inline-block font-medium' >Nurettin</span>
            </div>
        </div>
    );

  return (
    <div className='w-full top-0 sticky flex justify-content-center bg-blue-500 px-2'>
    <Menubar className='bg-blue-500 text-white md:w-9 w-full border-none' start={start} end={end} />
    </div>
  )
}

export default Navbar