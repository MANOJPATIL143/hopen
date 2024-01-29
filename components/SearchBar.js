import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <div className="suggestions">
        {/* Add your suggested recommendation buttons here */}
        <button>Dropdown</button>
        <button>Logo</button>
        <button>Radio Button</button>
        <button>Picture Selection</button>
        <button>Cover</button>
        <button>Short Text</button>
      </div>
    </div>
  );
};

export default SearchBar;