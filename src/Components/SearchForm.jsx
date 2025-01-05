import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const initialCriteria = {
    type: 'any',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    dateAfter: '',
    dateBefore: '',
    postcode: '',
  };

  const [searchCriteria, setSearchCriteria] = useState(initialCriteria);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchCriteria);
  };

  const handleClear = () => {
    setSearchCriteria(initialCriteria);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="label" htmlFor="type">
          Property Type
        </label>
        <select
          className="select"
          id="type"
          name="type"
          value={searchCriteria.type}
          onChange={handleChange}
        >
          <option value="any">Any</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
          <option value="Villa">Villa</option>
        </select>
      </div>
      <div className="form-group flex-group">
        <div className="flex-half">
          <label className="label" htmlFor="minPrice">
            Min Price
          </label>
          <input
            className="input"
            id="minPrice"
            name="minPrice"
            type="number"
            placeholder="Min Price"
            value={searchCriteria.minPrice}
            onChange={handleChange}
          />
        </div>
        <div className="flex-half">
          <label className="label" htmlFor="maxPrice">
            Max Price
          </label>
          <input
            className="input"
            id="maxPrice"
            name="maxPrice"
            type="number"
            placeholder="Max Price"
            value={searchCriteria.maxPrice}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group flex-group">
        <div className="flex-half">
          <label className="label" htmlFor="minBedrooms">
            Min Bedrooms
          </label>
          <input
            className="input"
            id="minBedrooms"
            name="minBedrooms"
            type="number"
            placeholder="Min"
            value={searchCriteria.minBedrooms}
            onChange={handleChange}
          />
        </div>
        <div className="flex-half">
          <label className="label" htmlFor="maxBedrooms">
            Max Bedrooms
          </label>
          <input
            className="input"
            id="maxBedrooms"
            name="maxBedrooms"
            type="number"
            placeholder="Max"
            value={searchCriteria.maxBedrooms}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group flex-group">
        <div className="flex-half">
          <label className="label" htmlFor="dateAfter">
            Date After
          </label>
          <input
            className="input"
            id="dateAfter"
            name="dateAfter"
            type="date"
            value={searchCriteria.dateAfter}
            onChange={handleChange}
          />
        </div>
        <div className="flex-half">
          <label className="label" htmlFor="dateBefore">
            Date Before
          </label>
          <input
            className="input"
            id="dateBefore"
            name="dateBefore"
            type="date"
            value={searchCriteria.dateBefore}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label className="label" htmlFor="postcode">
          Postcode Area
        </label>
        <input
          className="input"
          id="postcode"
          name="postcode"
          type="text"
          placeholder="e.g. BR1, NW1"
          value={searchCriteria.postcode}
          onChange={handleChange}
        />
      </div>
      <div className="form-group button-group">
        <button className="button" type="submit">
          Search
        </button>
        <button
          className="button clear-button"
          type="button"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
