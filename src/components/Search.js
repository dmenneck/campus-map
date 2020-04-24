import React, { useContext } from 'react';
import { Input } from 'antd';
import { AppContext } from './AppContext';

const { Search } = Input;

const SearchComponent = () => {
  const { value7 } = useContext(AppContext);
  const [searchBarVisibility, setSearchBarVisibility] = value7;

  if (searchBarVisibility) {
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
  } else {
    return null;
  }
};

export default SearchComponent;
