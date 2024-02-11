import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';

interface Props {
  brands: string[];
  onCheckboxChange: (selectedBrands: string[]) => void;
}

const SortByBrandsComponent: React.FC<Props> = ({ brands, onCheckboxChange }) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const allBrands=Array.from(new Set(brands))
  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    const value = e.target.value;
    setSelectedBrands(prevSelectedBrands => {
      const updatedSelectedBrands = e.target.checked
        ? [...prevSelectedBrands, value]
        : prevSelectedBrands.filter((brand) => brand !== value);
      onCheckboxChange(updatedSelectedBrands);
      return updatedSelectedBrands;
    });
  };

  const filteredBrands = allBrands.filter(brand =>
    brand.toLowerCase().includes(searchInput.toLowerCase())
);

useEffect(() => {
  onCheckboxChange(selectedBrands);
}, [selectedBrands]);
  

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
              checked={selectedBrands.includes(item)}
              onChange={handleCheckboxChange}
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

export default SortByBrandsComponent;
