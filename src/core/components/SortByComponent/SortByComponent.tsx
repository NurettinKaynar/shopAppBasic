import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton'
import { SortByEnum } from '../../enums'
import { useState } from 'react';

interface Props {
    onRadioButtonChange: (sortBy: SortByEnum) => void;
  }

const SortByComponent:React.FC<Props> =({  onRadioButtonChange }) => {
    const [selectedRadioButton, setSelectedRadioButton] = useState<SortByEnum>(SortByEnum.NewToOld)
    const handleRadioButtonChange = (event: RadioButtonChangeEvent) => {
        const selectedValue = event.value;
        setSelectedRadioButton(selectedValue);
        onRadioButtonChange(selectedValue); // Notify parent component of the selected sorting option
    };
  return (
    <div className=" flex flex-column gap-2">
        <span className='text-gray-300'>Sort By</span>
        <div className='card shadow-2 flex flex-column p-4 gap-3' >
            {/* Button 1 */}
        <div className="flex align-items-center">
        <RadioButton
        inputId="sortBy1"
        name="sortBy1"
        value={SortByEnum.OldToNew}
        onChange={(e: RadioButtonChangeEvent) => handleRadioButtonChange(e)}
        checked={selectedRadioButton === SortByEnum.OldToNew}
        />
        <label htmlFor="sortBy1" className="ml-2"> Old to new</label>
    </div>
            {/* Button 2 */}
        <div className="flex align-items-center">
        <RadioButton
        inputId="sortBy2"
        name="sortBy2"
        value={SortByEnum.NewToOld}
        onChange={(e: RadioButtonChangeEvent) => handleRadioButtonChange(e)}
        checked={selectedRadioButton === SortByEnum.NewToOld}
        />
        <label htmlFor="sortBy2" className="ml-2"> New to old</label>
    </div>
            {/* Button 3 */}
        <div className="flex align-items-center">
        <RadioButton
        inputId="sortBy3"
        name="sortBy3"
        value={SortByEnum.PriceHighToLow}
        onChange={(e: RadioButtonChangeEvent) => handleRadioButtonChange(e)}
        checked={selectedRadioButton === SortByEnum.PriceHighToLow}
        />
        <label htmlFor="sortBy3" className="ml-2"> Price High To Low</label>
    </div>
            {/* Button 4 */}
        <div className="flex align-items-center">
        <RadioButton
        inputId="sortBy3"
        name="sortBy3"
        value={SortByEnum.PriceLowToHigh}
        onChange={(e: RadioButtonChangeEvent) => handleRadioButtonChange(e)}
        checked={selectedRadioButton === SortByEnum.PriceLowToHigh}
        />
        <label htmlFor="sortBy3" className="ml-2"> Price Low To High</label>
    </div>
        </div>
    </div>
  )
}

export default SortByComponent