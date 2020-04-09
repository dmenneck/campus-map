import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchComponent = () => {
  return (
    <div id='search'>
      <Search
        id='searchBar'
        placeholder='Suche nach Gebäuden, Räumen, ...'
        onSearch={(value) => console.log(value)}
        style={{ width: 500, height: 60 }}
      />
    </div>
  );
};

export default SearchComponent;
