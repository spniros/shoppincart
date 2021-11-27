import React, { useState } from "react";

const Checkbox = ({ classes, label, handleCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxChange = () => {
    setIsChecked(!isChecked);
    let newLabel = labelConvert(label);
    handleCheckboxChange(newLabel);
  };

  //this patch for ui +BE data different;
  const labelConvert = (label) => {
    switch (label) {
      case "S":
        return "small";

      case "XS":
        return "xsmall";

      case "M":
        return "medium";

      case "ML":
        return "mediumlarge";

      case "L":
        return "large";

      case "XL":
        return "xlarge";

      case "XXL":
        return "xxlarge";

      default:
        break;
    }
  };

  return (
    <div className={classes}>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={checkboxChange}
        />

        <span className="checkmark">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
