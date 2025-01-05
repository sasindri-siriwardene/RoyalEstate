import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import './PropertyDetails.css';

function PropertyDetails({ properties }) {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  if (!property) {
    return <div>Property not found</div>;
  }

  const images = [
    property.picture,
    'https://picsum.photos/id/10/300/200',
    'https://picsum.photos/id/20/300/200'
   
  ];

  return (
    <div className="container">
      <h1 className="property-title">{property.location}</h1>
      <div className={`property-grid property-grid-md`}>
        <div>
          <img
            src={property.images[currentImage]}
            alt={`Property ${currentImage + 1}`}
            className="property-image"
          />
          <div className="property-thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={property.images[index]}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail-image ${
                  index === currentImage ? 'thumbnail-selected' : ''
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
        <div>
          <Tab.Group>
            <Tab.List className="tab-list">
              <Tab className={({ selected }) => `tab-item ${selected ? 'tab-item-selected' : 'tab-item-hover'}`}>
                Description
              </Tab>
              <Tab className={({ selected }) => `tab-item ${selected ? 'tab-item-selected' : 'tab-item-hover'}`}>
                Floor Plan
              </Tab>
              <Tab className={({ selected }) => `tab-item ${selected ? 'tab-item-selected' : 'tab-item-hover'}`}>
                Map
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="tab-panel">
              <p className="property-price ">£{property.price.toLocaleString()}</p>
              <p className="property-info">{property.bedrooms} bedrooms</p>
              <p className="property-info">{property.type}</p>
              <p className="property-info">{property.tenure}</p>
                <p>{property.description}</p>
              </Tab.Panel>
              <Tab.Panel className="tab-panel">
                <img
                  src={property.floorPlan}
                  alt="Floor Plan"
                  className="property-image"
                />
              </Tab.Panel>
              <Tab.Panel className="tab-panel">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  src={property.googleMap}
                  allowFullScreen
                ></iframe>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
