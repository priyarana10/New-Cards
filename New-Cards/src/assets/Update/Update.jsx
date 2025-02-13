import React from "react";
import "./Update.css";

const Update = ({ lists, onCategoryClick, selectedCategory, searchTerm, onSearchChange }) => {
  return (
    <div className="sidenav">
      <div className="search-container">
        <form onSubmit={(e) => e.preventDefault()}> 
          <input
            type="text"
            placeholder="Search.."
            name="search"
            value={searchTerm} 
            onChange={onSearchChange} 
          ></input>
        </form>
      </div>



      <div className="side-link">
         {lists.map((card) => (
          <ul className="side-links" key={card.id}>
            <li>
               <p
                 className={`side-items ${
                   selectedCategory === card.category ? "active" : ""
                 }`}
                onClick={() => onCategoryClick(card.category)}
              >
                 {card.category}
               </p>
             </li>
           </ul>
         ))}
       </div>
      
    </div>
  );
};

export default Update;
