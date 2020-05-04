import React, { useContext, useState, useEffect } from 'react';
import { Input } from 'antd';
import { AppContext } from './AppContext';
import { buildings } from './Layers';

const { Search } = Input;

const SearchComponent = () => {
  const { value7, value2 } = useContext(AppContext);
  const [searchBarVisibility, setSearchBarVisibility] = value7;
  const [features, setFeatures] = useState([]);
  const [search, setSearch] = useState('');
  const [clickedFeature, setClickedFeature] = useState('');

  // get Features async
  useEffect(() => {
    setTimeout(() => {
      setFeatures(buildings.getSource().getFeatures());
    }, 1000);
  }, []);

  let names = features.map((item) => item.values_.name);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  let filteredNames = names.filter((name) => {
    return name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
  });

  const filteredNamesGetFeatures = (e) => {
    let clickedBuilding = e.target.innerHTML; // string

    let mappedFeatures = features.map((item) => {
      if (clickedBuilding === item.values_.name) {
        setClickedFeature(item.values_.geometry);
      }
    });
    let featureExtent = clickedFeature.extent_;
    console.log(featureExtent);
  };

  if (searchBarVisibility) {
    return (
      <div id='search'>
        <Search
          id='searchBar'
          placeholder='Suche nach Gebäuden, Räumen, ...'
          onSearch={(value) => console.log(value)}
          onChange={updateSearch}
          style={{ width: 500, height: 60 }}
        />

        <ul id={search ? 'filtered-names-container-max-height' : 'hide'}>
          {filteredNames.map((name, index) => (
            <li
              key={index}
              className='mapped-filtered-names unselectable'
              onClick={filteredNamesGetFeatures}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default SearchComponent;
