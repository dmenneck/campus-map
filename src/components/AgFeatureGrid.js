import React from 'react';
import { AgFeatureGrid } from '@terrestris/react-geo';
import { Buildings } from './Layers';

const source = Buildings.getSource();
const features = source.getFeatures();

const SearchBuilding = () => {
  return <AgFeatureGrid features={features} />;
};

export default SearchBuilding;
