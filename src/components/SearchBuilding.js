import React, { useState, useEffect, useContext } from 'react';
import { AgFeatureGrid } from '@terrestris/react-geo';
import { Buildings } from './Layers';
import { AppContext } from './AppContext';

const SearchBuilding = ({ map }) => {
  const { value4 } = useContext(AppContext);

  const [features, setFeatures] = useState([]);

  // getFeatures after first render (after performing the DOM updates) and after every update (same as "mounting" and "updating")
  useEffect(() => {
    setFeatures(Buildings.getSource().getFeatures());
  }, []);

  return (
    <AgFeatureGrid
      features={features}
      map={map}
      columnDefs={{
        name: {
          headerName: 'Name',
          sortable: true,
          filter: true,
          resiable: true,
        },
        barrier_free_entrance: {
          headerName: 'Barrierefreiheit',
          sortable: true,
          filter: true,
          resiable: true,
        },
        address: {
          headerName: 'Addresse',
          sortable: true,
          filter: true,
          resiable: true,
        },
        building_number: {
          headerName: 'Gebäudenr.',
          sortable: true,
          filter: true,
          resiable: true,
        },
      }}
      attributeBlacklist={[
        'facilities_name',
        'facilities_hyperlink',
        'image',
        'type',
      ]}
      className='agFeatureGrid'
    />
  );
};

export default SearchBuilding;
