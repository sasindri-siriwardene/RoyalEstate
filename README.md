# Responsive Web Application for Estate Agent

This project is a client-side web application for an estate agent, developed as part of the 5COSC026W Advanced Client-Side Web Development module. It enables users to search for properties based on various criteria, save favorite properties, and access detailed property information in a responsive, user-friendly interface.

## Features

### Search Functionality
- **Criteria**: Search properties by type, price, bedrooms, date added, and postcode area.
- **Dynamic Search**: Works with one or multiple criteria simultaneously.
- **JSON Integration**: Property data sourced from a JSON file containing seven properties.

### Property Listing
- **Responsive Display**: Properties are displayed with an image, short description, and price.
- **Detailed Property Page**: Includes a large image, thumbnails, long description, floor plan, and a Google map.

### Favorites Management
- **Add to Favorites**: Save properties by dragging them to a favorites list or pressing a button.
- **Remove from Favorites**: Remove properties by dragging them out of the list or pressing a delete button.
- **Clear Favorites**: Clear the entire favorites list.

### Responsiveness
- **Hand-written Media Queries**: Adapt layout for large screens and devices smaller than iPad landscape width.
- **Flexible Layouts**: Use of CSS Flexbox or Grid.

### Aesthetics
- Visual hierarchy with headings, subheadings, consistent font styles, and alignment.
- Effective use of images and colors for visual appeal.

### Security
- Client-side protection using CSP and HTML encoding.

## Installation

### Prerequisites
- Node.js and npm installed.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd estate-agent-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```


### Important Note on `node_modules`


## Usage
1. Use the search form to filter properties by criteria.
2. View search results dynamically displayed.
3. Access individual property pages for more details.
4. Save properties to your favorites list and manage them efficiently.


## Design Considerations
- **Consistency**: Unified design elements across the application.
- **Usability**: Easy navigation and intuitive interactions.
- **Performance**: Optimized for smooth performance across devices.

