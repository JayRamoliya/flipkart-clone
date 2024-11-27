import React, { useState } from 'react'
import Header from './components/Header/Header'
import Filters from './components/Filters/Filters'
import FiltersWithCategories from './components/FiltersWithCategories/FiltersWithCategories'
import FilterSidebar from './components/FilterSidebar/FilterSidebar'
import FilterSidebar2 from './components/FilterSidebar2/FilterSidebar2'
import ProductGrid from './components/ProductGrid/ProductGrid'

import './App.css'




// const App = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   return (
//     <div className="container">
//     <Header />
//       <button className="toggle-sidebar-button" onClick={toggleSidebar}>
//         {isSidebarOpen ? "Close Filters" : "Open Filters"}
//       </button>

//       <div className="content">
//         <div className={`filters ${isSidebarOpen ? "open" : "closed"}`}>
//           <Filters />
//           <FiltersWithCategories />
//           <FilterSidebar />
//           <FilterSidebar2 />
//         </div>

//         <ProductGrid />
//       </div>
//     </div>
//   );
// };

// export default App;




const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="content">
          <div className={`filters ${isSidebarOpen ? "open" : "closed"}`}>
            <Filters />
            <FiltersWithCategories />
            <FilterSidebar />
            <FilterSidebar2 />
          </div>
        </div>
        <button className="toggle-sidebar-button" onClick={toggleSidebar}>
          {isSidebarOpen ? "Close Filters" : "Open Filters"}
        </button>
        <ProductGrid />
      </div>
    </>
  );
};

export default App;
