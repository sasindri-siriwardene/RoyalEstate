import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

function PropertyList({ properties, favorites, onToggleFavorite }) {
  return (
    <div className={`property-list property-list-md property-list-lg`}>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          isFavorite={favorites.some((fav) => fav.id === property.id)}
          onToggleFavorite={() => onToggleFavorite(property)}
        />
      ))}
    </div>
  );
}

export default PropertyList;
