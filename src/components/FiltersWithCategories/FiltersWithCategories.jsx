import React, { useState } from "react";

const Dropdown = ({ label, options, onChange }) => {
  return (
    <select style={styles.dropdown} onChange={onChange}>
      <option value="">{label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const CollapsibleCategory = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={styles.categoryContainer}>
      <div
        style={styles.categoryHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "▼" : "►"}</span>
      </div>
      {isOpen && (
        <ul style={styles.categoryList}>
          {items.map((item, index) => (
            <li key={index} style={styles.categoryItem}>
              {item}
            </li>
          ))}
          <li style={styles.showMore}>Show 2 more</li>
        </ul>
      )}
    </div>
  );
};

const PriceSlider = ({ min, max, onChange }) => {
  const [range, setRange] = useState([min, max]);

  const handleChange = (event, index) => {
    const newRange = [...range];
    newRange[index] = event.target.value;
    setRange(newRange);
    if (onChange) onChange(newRange);
  };

  return (
    <div>
      <div style={styles.sliderContainer}>
        <input
          type="range"
          min={min}
          max={max}
          value={range[0]}
          onChange={(e) => handleChange(e, 0)}
          style={styles.slider}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={range[1]}
          onChange={(e) => handleChange(e, 1)}
          style={styles.slider}
        />
      </div>
      <div style={styles.rangeInputs}>
        <Dropdown
          label="Min"
          options={["₹0", "₹1000", "₹2000", "₹5000"]}
          onChange={(e) => handleChange(e, 0)}
        />
        <span style={styles.toText}>to</span>
        <Dropdown
          label="Max"
          options={["₹5000+", "₹10000+", "₹20000+"]}
          onChange={(e) => handleChange(e, 1)}
        />
      </div>
    </div>
  );
};

const FiltersWithCategories = () => {
  return (
    <div style={styles.container}>
      <h4 style={styles.heading}>CATEGORIES</h4>
      <CollapsibleCategory
        title="Audio & Video"
        items={[
          "Video Accessories",
          "Speakers",
          "Music Players & Acces...",
          "Audio Accessories",
          "Home Theaters",
        ]}
      />
      <h4 style={styles.heading}>PRICE</h4>
      <PriceSlider min={0} max={10000} />
      <div style={styles.assuredContainer}>
        <input type="checkbox" />
        <span style={styles.assuredText}>
          <img
            src="/src/assets/assured.png"
            alt="Assured"
            style={styles.icon}
          />
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "10px",
    borderRadius: "5px",
  },
  heading: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  categoryContainer: {
    marginBottom: "15px",
  },
  categoryHeader: {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },
  categoryList: {
    listStyle: "none",
    padding: 0,
    margin: "10px 0",
  },
  categoryItem: {
    marginBottom: "5px",
    fontSize: "13px",
  },
  showMore: {
    color: "blue",
    cursor: "pointer",
    fontSize: "13px",
  },
  sliderContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  slider: {
    width: "100%",
    margin: "5px 0",
  },
  rangeInputs: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdown: {
    padding: "5px",
    fontSize: "13px",
  },
  toText: {
    fontSize: "13px",
    margin: "0 5px",
  },
  assuredContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  assuredText: {
    display: "flex",
    alignItems: "center",
    fontSize: "13px",
    marginLeft: "5px",
  },
  icon: {
    width: "86px",
    marginRight: "5px",
  },
};

export default FiltersWithCategories;
