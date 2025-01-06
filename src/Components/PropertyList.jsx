import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';
/**
 * PropertyList component renders a list of properties using the PropertyCard component.
 * It also handles the toggling of favorite status for each property.
 * 
 * @param {Object[]} properties - List of properties to display.
 * @param {Object[]} favorites - List of favorite properties.
 * @param {Function} onToggleFavorite - Function to toggle the favorite status of a property.
 * @returns {JSX.Element} The JSX for displaying the property list.
 */
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
