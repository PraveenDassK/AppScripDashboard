import React from "react";
import "./index.css";
import SearchIcon from "../../assets/Tasks/SearchIcon.png";
import CalenderIcon from "../../assets/Tasks/Calendericon.png";
import FilterIcon from "../../assets/Tasks/FilterIcon.png";
const SearchAndFilter = () => {
  return (
    <div className='search_container'>
      <div className='search_input-search'>
        <img src={SearchIcon} alt='search_container' />
        <input type='text' placeholder='Search' className='input_style' />
      </div>
      <div className='search_input-calender'>
        <img src={CalenderIcon} alt='search_container' />
        <input type='text' placeholder='From date' className='input_style' />
      </div>
      <span className='search_to'>to</span>
      <div className='search_input-calender'>
        <img src={CalenderIcon} alt='search_container' />
        <input type='text' placeholder='To date' className='input_style' />
      </div>
      <div className='button_div'>
        <button className='search_apply'>Apply</button>
      </div>
      <div className='button_div'>
        <button className='search_reset'>Reset</button>
      </div>
      <div className='filter_div'>
        <button className='search_filter'>
          <img src={FilterIcon} alt='filter_icon' />
          Filter
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
