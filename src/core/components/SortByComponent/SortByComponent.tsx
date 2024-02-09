import { RadioButton } from 'primereact/radiobutton'
import { SortByEnum } from '../../enums'

const SortByComponent = () => {
  return (
    <div className=" flex flex-column gap-2">
        <span className='text-gray-300'>Sort By</span>
        <div className='card shadow-2 flex flex-column p-4 gap-3' >
            {/* Button 1 */}
        <div className="flex align-items-center">
        <RadioButton inputId="sortBy1" name="sortBy1" value={SortByEnum.OldToNew} />
        <label htmlFor="sortBy1" className="ml-2"> Old to new</label>
    </div>
            {/* Button 2 */}
        <div className="flex align-items-center">
        <RadioButton inputId="sortBy2" name="sortBy2" value={SortByEnum.NewToOld} />
        <label htmlFor="sortBy2" className="ml-2"> New to old</label>
    </div>
            {/* Button 3 */}
        <div className="flex align-items-center">
        <RadioButton inputId="sortBy3" name="sortBy3" value={SortByEnum.PriceHighToLow} />
        <label htmlFor="sortBy3" className="ml-2"> Price High To Low</label>
    </div>
            {/* Button 4 */}
        <div className="flex align-items-center">
        <RadioButton inputId="sortBy3" name="sortBy3" value={SortByEnum.PriceLowToHigh} />
        <label htmlFor="sortBy3" className="ml-2"> Price Low To High</label>
    </div>
        </div>
    </div>
  )
}

export default SortByComponent