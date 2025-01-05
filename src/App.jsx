import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './Components/SearchForm';
import PropertyList from './Components/PropertyList';
import FavoritesList from './Components/FavoritesList';
import PropertyDetails from './Components/PropertyDetails';
import propertiesData from './data/properties.json';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

function App() {
  const [properties, setProperties] = useState(propertiesData.properties);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleSearch = (searchCriteria) => {
    const filtered = properties.filter((property) => {
      const typeMatch = searchCriteria.type === 'any' || property.type === searchCriteria.type;
      const priceMatch = (!searchCriteria.minPrice || property.price >= searchCriteria.minPrice) &&
                         (!searchCriteria.maxPrice || property.price <= searchCriteria.maxPrice);
      const bedroomsMatch = (!searchCriteria.minBedrooms || property.bedrooms >= searchCriteria.minBedrooms) &&
                            (!searchCriteria.maxBedrooms || property.bedrooms <= searchCriteria.maxBedrooms);
      const dateMatch = (!searchCriteria.dateAfter || new Date(property.added.year, property.added.month , property.added.day) >= new Date(searchCriteria.dateAfter)) &&
                        (!searchCriteria.dateBefore || new Date(property.added.year, property.added.month, property.added.day) <= new Date(searchCriteria.dateBefore));
      const postcodeMatch = !searchCriteria.postcode || property.postcode.startsWith(searchCriteria.postcode.toUpperCase());

      return typeMatch && priceMatch && bedroomsMatch && dateMatch && postcodeMatch;
    });

    setFilteredProperties(filtered);
  };

  const toggleFavorite = (property) => {
    const isFavorite = favorites.some((fav) => fav.id === property.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== property.id);
    } else {
      updatedFavorites = [...favorites, property];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
  };

  return (
    <Router>
      <Header/>
      {location.pathname === '/' && <Hero />}
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4">
                  <SearchForm onSearch={handleSearch} />
                  <FavoritesList
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                    onClearFavorites={clearFavorites}
                  />
                </div>
                <div className="lg:w-3/4">
                  <PropertyList
                    properties={filteredProperties}
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                  />
                </div>
              </div>
            }
          />
          <Route
            path="/property/:id"
            element={<PropertyDetails properties={properties} />}
          />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

