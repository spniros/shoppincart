import React, { useState } from "react";
import Checkbox from "./Checkbox";

const Filter = ({ sizeFilter }) => {
  const availableSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(new Set());

  const toggleCheckbox = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }
    setSelectedCheckboxes(selectedCheckboxes);

    sizeFilter(selectedCheckboxes);
  };



  const createCheckbox = (label) => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={toggleCheckbox}
      key={label}
    />
  );

  const createCheckboxes = () => availableSizes.map(createCheckbox);

  return (
    <div className="filters">
      <h4 className="title">Sizes:</h4>
      {createCheckboxes()}
    </div>
  );
};

export default Filter;
