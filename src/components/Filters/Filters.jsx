import React, { useState } from "react";

const FilterTag = ({ label, onRemove }) => (
  <div style={styles.filterTag}>
    <span>{label}</span>
    <button onClick={onRemove} style={styles.closeButton}>✕</button>
  </div>
);

const Filters = () => {
  const [filters, setFilters] = useState([
    "3★ & above",
    "4★ & above",
    "Min-₹5000+",
  ]);

  const handleRemove = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearAll = () => {
    setFilters([]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span>Filters</span>
        <button onClick={clearAll} style={styles.clearButton}>CLEAR ALL</button>
      </div>
      <div style={styles.filterContainer}>
        {filters.map((filter, index) => (
          <FilterTag key={index} label={filter} onRemove={() => handleRemove(filter)} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "10px",
    borderRadius: "5px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  clearButton: {
    background: "none",
    border: "none",
    color: "blue",
    cursor: "pointer",
  },
  filterContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
  },
  filterTag: {
    display: "flex",
    alignItems: "center",
    background: "#f0f0f0",
    padding: "5px 10px",
    borderRadius: "15px",
  },
  closeButton: {
    background: "none",
    border: "none",
    marginLeft: "5px",
    cursor: "pointer",
  },
};

export default Filters;
