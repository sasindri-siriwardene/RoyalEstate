import React from 'react';
import { Link } from 'react-router-dom';
import './FavoritesList.css'; // Import the external CSS file
/**
 * FavoritesList Component
 * 
 * Displays a list of favorite properties, with options to remove individual properties
 * or clear the entire favorites list.
 *
 * @param {Object[]} favorites - List of favorite properties.
 * @param {function} onToggleFavorite - Callback to toggle a property's favorite status.
 * @param {function} onClearFavorites - Callback to clear all favorite properties.
 */
function FavoritesList({ favorites, onToggleFavorite, onClearFavorites }) {
  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorites added yet.</p>
      ) : (
        <>
          <ul className="favorites-list">
            {favorites.map((property) => (
              <li key={property.id} className="favorites-item">
                <Link to={`/property/${property.id}`} className="favorites-link">
                  {property.location},<br/>
                  € {property.price}
                </Link>
                <button
                  onClick={() => onToggleFavorite(property)}
                  className="remove-favorite-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={onClearFavorites}
            className="clear-favorites-button"
          >
            Clear Favorites
          </button>
        </>
      )}
    </div>
  );
}

export default FavoritesList;
