import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css'; // Import the CSS file

function PropertyCard({ property, isFavorite, onToggleFavorite }) {
  return (
    <div className="property-card">
      <img
        src={property.picture}
        alt={property.location}
      />
      <div className="card-content">
        <h2>{property.location}</h2>
        <p className="price">£{property.price.toLocaleString()}</p>
        <p className="details">{property.bedrooms} bedrooms</p>
        <p className="details">{property.type}</p>
        <div className="button-group">
          <Link to={`/property/${property.id}`} className="view-details">
            View Details
          </Link>
          <button
            onClick={onToggleFavorite}
            className={`favorite-button ${isFavorite ? 'favorite' : 'default'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFavorite ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
