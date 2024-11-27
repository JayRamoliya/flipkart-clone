

import React, { useState } from "react";
import './FilterSidebar2.css'

const FilterSidebar2 = () => {
  const [openSections, setOpenSections] = useState({
    Brand: false,
    "Customer Ratings": false,
    Discount: false,
    "GST Invoice Available": false,
    Availability: false,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    Brand: '',
    "Customer Ratings": '',
    Discount: '',
    "GST Invoice Available": false,
    Availability: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleOptionChange = (section, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [section]: option,
    }));
  };

  const options = {
    Brand: ["Nike", "Adidas", "Puma", "Reebok"],
    "Customer Ratings": ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    Discount: ["10% off", "20% off", "30% off"],
    "GST Invoice Available": ["Yes", "No"],
    Availability: ["In Stock", "Out of Stock"]
  };

  return (
    <div className="filter-sidebar">
      {Object.keys(openSections).map((section) => (
        <div className="filter-section" key={section}>
          <div
            className="filter-header"
            onClick={() => toggleSection(section)}
          >
            <h4>{section}</h4>
            <span>{openSections[section] ? "▲" : "▼"}</span>
          </div>
          {openSections[section] && (
            <div className="filter-options">
              {options[section].map((option) => (
                <div
                  key={option}
                  className="filter-option"
                  onClick={() => handleOptionChange(section, option)}
                >
                  <label>
                    <input
                      type={section === "GST Invoice Available" || section === "Availability" ? "checkbox" : "radio"}
                      checked={selectedOptions[section] === option || selectedOptions[section] === option}
                      onChange={() => {}}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar2;
