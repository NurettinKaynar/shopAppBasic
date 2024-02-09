import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';

interface Props {
  brands: string[];
  onCheckboxChange: (selectedBrands: string[]) => void;
}

const SortByBrandsComponent: React.FC<Props> = ({ brands, onCheckboxChange }) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== value));
    }
    onCheckboxChange(selectedBrands);
  };

  return (
    <div className="card shadow-2 flex flex-column p-4">
      <span className=" p-input-icon-left">
        <i className="pi pi-search" />
        <InputText className=" border-none w-full" placeholder="Search" />
      </span>
      <div className="flex flex-column gap-2">
        {brands&&brands.map((item, index) => (
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
