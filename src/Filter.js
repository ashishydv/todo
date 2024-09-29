import React from 'react';

function FilterButton({text, value,selectedFilter, setFilter}){
  return (
    <button className={selectedFilter === value ? 'active' : ''} onClick={() => setFilter(value)}>{text}</button>
  );
}

function Filter({ selectedFilter, setFilter }){

  return (
    <div className="filter">
      <FilterButton text="All" value='all' setFilter={setFilter} selectedFilter={selectedFilter} />
      <FilterButton text="Completed" value='completed' setFilter={setFilter} selectedFilter={selectedFilter} />
      <FilterButton text="Pending" value='pending' setFilter={setFilter} selectedFilter={selectedFilter} />
    </div>
  );
}

export default Filter;
