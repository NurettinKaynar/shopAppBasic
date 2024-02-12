import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';

interface Props {
  models: string[];
  onCheckboxChange: (selectedModels: string[]) => void;
}

const SortByModelsComponent: React.FC<Props> = ({ models, onCheckboxChange }) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [selectedModels, setselectedModels] = useState<string[]>([]);
  const allModels=Array.from(new Set(models))
  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
   
    const value = e.value
    setselectedModels(prevselectedModels => {
      const updatedselectedModels = e.checked
        ? [...prevselectedModels, value]
        : prevselectedModels.filter((brand) => brand !== value);
      onCheckboxChange(updatedselectedModels);
      return updatedselectedModels;
    });
  };

  const filteredBrands = allModels.filter(model =>
    model.toLowerCase().includes(searchInput.toLowerCase())
);

useEffect(() => {
  onCheckboxChange(selectedModels);
}, [selectedModels]);
  

  return (
    <div className="card shadow-2 flex flex-column p-4 gap-4">
      <span className=" p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
        className=" border-none w-full"
        placeholder="Search"
        value={searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)} />
      </span>
      <div className="flex flex-column gap-2 h-min max-h-30rem overflow-y-scroll">
        {filteredBrands && filteredBrands.map((item, index) => (
          <div className="flex align-items-center" key={index}>
           <Checkbox
    inputId={`${item}${index}`}
    name={item}
    value={item}
    checked={selectedModels.includes(item)}
    defaultChecked={selectedModels.includes(item)} // Use defaultChecked instead of checked
    onChange={handleCheckboxChange} // Add onChange handler
/>

            <label htmlFor={`${item}${index}`} className="ml-2">
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortByModelsComponent;
